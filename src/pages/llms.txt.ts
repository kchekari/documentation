import { getCollection } from 'astro:content';
import { pagePath, markdownPath } from '../lib/docs-path';
import type { APIRoute } from 'astro';
export const prerender = true;
export const GET: APIRoute = async ({ site }) => {
  const docs = await getCollection('docs', ({ data }) => !data.draft);
  const origin = site || new URL('https://docs.aktraizer.com');
  const clean = (s: string) => s.replace(/[\r\n\[\]]/g, ' ');
  const lines = docs.filter((doc) => doc.filePath).sort((a, b) => a.id.localeCompare(b.id)).map((doc) =>
    '- [' + clean(doc.data.title) + '](' + new URL(pagePath(doc.id), origin) + '): ' +
    clean(doc.data.description || '') + ' — Source Markdown/MDX : ' + new URL(markdownPath(doc.id), origin)
  );
  return new Response('# Aktraizer Docs\n\n> Documentation technique et tutoriels en français.\n\n' +
    'Les sources MDX peuvent contenir des composants interactifs et des imports.\n\n## Documentation\n\n' + lines.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
