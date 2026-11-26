import { getCollection } from 'astro:content';
import { readFile } from 'node:fs/promises';
import type { APIRoute } from 'astro';
export const prerender = true;
export async function getStaticPaths() {
  const docs = await getCollection('docs', ({ data }) => !data.draft);
  return Promise.all(docs.filter((doc) => doc.filePath).map(async (doc) => ({
    params: { id: doc.id },
    props: { source: await readFile(doc.filePath!, 'utf8') },
  })));
}
export const GET: APIRoute = ({ props }) => new Response(props.source, {
  headers: { 'Content-Type': 'text/plain; charset=utf-8' },
});
