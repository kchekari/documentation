
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  const docs = await getCollection('docs');

  return rss({
    title: 'Documentation',
    description: 'Dernières mises à jour de la doc',
    site: 'https://kb.aktraizer.com',
    items: docs.map(doc => ({
      title: doc.data.title,
      description: doc.data.description || '',
      link: `/${doc.slug}/`,
      pubDate: doc.data.date || new Date(), // Si pas de date, on met la date actuelle
    })),
  });
}
