import { readdir, readFile, writeFile } from 'node:fs/promises';
import { resolve, relative, sep } from 'node:path';
import { load } from 'cheerio';
const root = resolve('dist');
const origin = 'https://docs.aktraizer.com';
const external = process.argv.includes('--external');
async function walk(dir) {
  const files = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(files.map((f) => f.isDirectory() ? walk(resolve(dir, f.name)) : resolve(dir, f.name)))).flat();
}
const files = await walk(root);
const all = new Set(files);
const htmlFiles = files.filter((f) => f.endsWith('.html'));
const idCache = new Map();
const broken = [];
const uncertain = [];
const remote = new Set();
function htmlURL(file) {
  let pathname = '/' + relative(root, file).split(sep).join('/');
  pathname = pathname.replace(/index\.html$/, '');
  return new URL(pathname, origin);
}
async function ids(file) {
  if (!idCache.has(file)) {
    const $ = load(await readFile(file, 'utf8'));
    idCache.set(file, new Set($('[id], a[name]').toArray().flatMap((el) => [$(el).attr('id'), $(el).attr('name')]).filter(Boolean)));
  }
  return idCache.get(file);
}
for (const file of htmlFiles) {
  const $ = load(await readFile(file, 'utf8'));
  const base = htmlURL(file);
  for (const element of $('a[href], img[src], script[src], link[href], iframe[src]').toArray()) {
    const raw = $(element).attr('href') ?? $(element).attr('src');
    if (!raw || raw.startsWith('data:')) continue;
    let url;
    try { url = new URL(raw, base); } catch { broken.push(relative(root, file) + ' → URL invalide : ' + raw); continue; }
    if (!['http:', 'https:'].includes(url.protocol)) continue;
    if (url.origin !== origin) { if (external) { url.hash = ''; remote.add(url.href); } continue; }
    let pathname;
    try { pathname = decodeURIComponent(url.pathname); } catch { broken.push(base.pathname + ' → encodage invalide : ' + raw); continue; }
    const target = resolve(root, '.' + pathname);
    if (target !== root && !target.startsWith(root + sep)) { broken.push(base.pathname + ' → chemin hors dist : ' + raw); continue; }
    const found = [target, resolve(target, 'index.html'), target + '.html'].find((f) => all.has(f));
    if (!found) { broken.push(base.pathname + ' → cible absente : ' + raw); continue; }
    if (url.hash && found.endsWith('.html') && !url.hash.startsWith('#:~:text=')) {
      let anchor;
      try { anchor = decodeURIComponent(url.hash.slice(1)).split(':~:text=')[0]; } catch { anchor = url.hash.slice(1); }
      if (anchor && !(await ids(found)).has(anchor)) broken.push(base.pathname + ' → ancre absente : ' + raw);
    }
  }
}
if (external) {
  const queue = [...remote];
  async function check() {
    while (queue.length) {
      const url = queue.shift();
      try {
        let response = await fetch(url, { method: 'HEAD', redirect: 'follow', signal: AbortSignal.timeout(12000) });
        if ([400, 405, 501].includes(response.status)) {
          await response.body?.cancel();
          response = await fetch(url, { redirect: 'follow', signal: AbortSignal.timeout(12000) });
        }
        await response.body?.cancel();
        if ([401, 403, 429].includes(response.status)) uncertain.push(url + ' → HTTP ' + response.status + ' (vérification manuelle)');
        else if (!response.ok) broken.push(url + ' → HTTP ' + response.status);
      } catch (error) { uncertain.push(url + ' → ' + error.message); }
    }
  }
  await Promise.all(Array.from({ length: 4 }, check));
}
const unique = [...new Set(broken)].sort();
const report = '# Vérification des liens\n\n' + htmlFiles.length + ' pages HTML analysées.\n\n' +
  '## Liens cassés (' + unique.length + ')\n\n' + (unique.map((s) => '- ' + s).join('\n') || 'Aucun.') +
  '\n\n## Résultats indéterminés\n\n' + (uncertain.map((s) => '- ' + s).join('\n') || 'Aucun.') + '\n';
await writeFile('link-report.md', report);
console.log(htmlFiles.length + ' pages analysées ; ' + unique.length + ' problèmes ; ' + uncertain.length + ' résultats indéterminés. Voir link-report.md.');
if (unique.length) process.exitCode = 1;
