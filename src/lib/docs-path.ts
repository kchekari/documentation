// Même retrait de /index que Starlight 0.36.2. Le site est à la racine du domaine.
export function pagePath(id: string) {
  const slug = id.replace(/(^|\/)index$/, '').replace(/\/$/, '').normalize();
  return slug ? '/' + slug.split('/').map(encodeURIComponent).join('/') + '/' : '/';
}
export function markdownPath(id: string) {
  return '/markdown/' + id.split('/').map(encodeURIComponent).join('/') + '.txt';
}
