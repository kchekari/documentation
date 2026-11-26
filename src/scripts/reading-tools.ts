const root = document.documentElement;
const host = document.querySelector<HTMLElement>('#v2-reading-tools');
const content = document.querySelector<HTMLElement>('main .sl-markdown-content');
const storage = {
  get(key: string) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key: string, value: string) { try { localStorage.setItem(key, value); } catch {} },
};
let resumeSnapshot: { path?: string; ratio?: number } | null = null;
try { resumeSnapshot = JSON.parse(storage.get('aktraizer.reading.v2') || 'null'); } catch {}
const sidebar = document.querySelector<HTMLButtonElement>('#v2-sidebar-toggle');
function setSidebar(collapsed: boolean) {
  root.classList.toggle('v2-sidebar-collapsed', collapsed);
  sidebar?.setAttribute('aria-expanded', String(!collapsed));
  if (sidebar) sidebar.textContent = collapsed ? 'Afficher le menu' : 'Masquer le menu';
}
setSidebar(storage.get('aktraizer.sidebar.v2') === '1');
sidebar?.addEventListener('click', () => {
  const collapsed = !root.classList.contains('v2-sidebar-collapsed');
  setSidebar(collapsed);
  storage.set('aktraizer.sidebar.v2', collapsed ? '1' : '0');
});
const focusButton = document.querySelector<HTMLButtonElement>('#v2-focus');
let ownsFullscreen = false;
async function focusMode(active: boolean) {
  root.classList.toggle('v2-focus', active);
  focusButton?.setAttribute('aria-pressed', String(active));
  if (focusButton) focusButton.textContent = active ? 'Quitter la concentration' : 'Concentration';
  if (active && !document.fullscreenElement && root.requestFullscreen) {
    try { await root.requestFullscreen(); ownsFullscreen = true; } catch { /* Mode sans menus conservé. */ }
  } else if (!active && ownsFullscreen && document.fullscreenElement) {
    ownsFullscreen = false;
    await document.exitFullscreen().catch(() => {});
  }
}
focusButton?.addEventListener('click', () => void focusMode(!root.classList.contains('v2-focus')));
document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement && ownsFullscreen) { ownsFullscreen = false; void focusMode(false); }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && root.classList.contains('v2-focus')) void focusMode(false);
});
document.querySelector('#v2-top')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
});
function readingRatio() {
  if (!content) return 0;
  const top = content.getBoundingClientRect().top + scrollY;
  const start = Math.max(0, top - 120);
  const distance = Math.max(0, content.offsetHeight - innerHeight + 120);
  return distance ? Math.min(1, Math.max(0, (scrollY - start) / distance)) : 1;
}
let saveTimer: ReturnType<typeof setTimeout>;
function saveReading() {
  if (host?.dataset.remember !== 'true' || !content) return;
  storage.set('aktraizer.reading.v2', JSON.stringify({
    path: location.pathname, title: host.dataset.title, ratio: readingRatio(), date: Date.now(),
  }));
}
function updateProgress() {
  document.querySelector<HTMLElement>('#v2-progress')?.style.setProperty('--progress', String(readingRatio()));
  clearTimeout(saveTimer);
  saveTimer = setTimeout(saveReading, 400);
}
window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
window.addEventListener('pagehide', saveReading);
window.addEventListener('load', () => {
  const params = new URLSearchParams(location.search);
  if (params.has('reprendre')) {
    try {
      const saved = resumeSnapshot;
      if (saved?.path === location.pathname && content && typeof saved.ratio === 'number') {
        const start = Math.max(0, content.getBoundingClientRect().top + scrollY - 120);
        const distance = Math.max(0, content.offsetHeight - innerHeight + 120);
        window.scrollTo({ top: start + Math.max(0, Math.min(1, saved.ratio)) * distance });
      }
    } catch {}
    params.delete('reprendre');
    history.replaceState(null, '', location.pathname + (params.size ? '?' + params : '') + location.hash);
  }
  updateProgress();
});
updateProgress();
const time = document.querySelector<HTMLElement>('[data-reading-time]');
if (time && content) {
  const text = content.cloneNode(true) as HTMLElement;
  text.querySelectorAll('pre, script, style, button').forEach((node) => node.remove());
  const words = (text.textContent || '').trim().split(/\s+/u).filter(Boolean).length;
  time.textContent = Math.max(1, Math.ceil(words / 200)) + ' min de lecture estimée';
}
document.querySelector('[data-print]')?.addEventListener('click', () => window.print());
const dialog = document.querySelector<HTMLDialogElement>('#v2-code-dialog');
const codeContent = document.querySelector<HTMLElement>('#v2-code-content');
let opener: HTMLButtonElement | null = null;
content?.querySelectorAll<HTMLElement>('.expressive-code').forEach((block) => {
  const button = document.createElement('button');
  button.type = 'button'; button.className = 'v2-code-expand'; button.textContent = 'Agrandir le code';
  button.addEventListener('click', () => {
    const pre = block.querySelector('pre');
    if (!pre || !dialog || !codeContent) return;
    const clone = pre.cloneNode(true) as HTMLElement;
    clone.removeAttribute('id');
    clone.querySelectorAll('[id]').forEach((node) => node.removeAttribute('id'));
    codeContent.replaceChildren(clone);
    opener = button;
    dialog.showModal();
  });
  block.append(button);
});
document.querySelector('#v2-code-close')?.addEventListener('click', () => dialog?.close());
dialog?.addEventListener('close', () => { codeContent?.replaceChildren(); opener?.focus(); });
async function diagrams() {
  if (!content?.querySelector('pre.mermaid')) return;
  try {
    const { default: mermaid } = await import('mermaid');
    mermaid.initialize({ startOnLoad: false, securityLevel: 'strict', theme: root.dataset.theme === 'dark' ? 'dark' : 'default' });
    for (const [i, pre] of Array.from(content.querySelectorAll<HTMLElement>('pre.mermaid')).entries()) {
      const source = pre.textContent || '';
      try {
        const { svg } = await mermaid.render('aktraizer-diagram-' + i, source);
        const figure = document.createElement('figure');
        figure.className = 'v2-diagram'; figure.innerHTML = svg;
        pre.replaceWith(figure);
      } catch {
        pre.classList.add('v2-diagram-error');
        pre.textContent = 'Diagramme Mermaid invalide.\n\n' + source;
      }
    }
  } catch { /* Le texte Mermaid reste lisible si le chargement échoue. */ }
  updateProgress();
}
void diagrams();
if (content && 'ResizeObserver' in window) new ResizeObserver(updateProgress).observe(content);
