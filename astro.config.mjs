// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';
import starlightBlog from 'starlight-blog';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.aktraizer.com',

  integrations: [
    starlight({
      // --- Informations générales ---
      title: 'Aktraizer Docs',
      customCss: ['./src/styles/custom.css'],
      lastUpdated: true,

      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/kchekari',
        },
      ],

      // --- Langue française à la racine du site ---
      locales: {
        root: {
          label: 'Français',
          lang: 'fr',
        },
      },

      // --- Plugins Starlight ---
      plugins: [
        starlightImageZoom(),

        starlightBlog({
          title: 'Blog',

          authors: {
            karim: {
              name: 'Karim CHEKARI',
              title: 'Enseignant',
              // picture: '/images/karim.jpg',
              // url: 'https://...',
            },
          },

          // Nombre d’articles affichés par page
          postCount: 12,

          // Nombre d’articles récents dans la sidebar du blog
          recentPostCount: 10,

          // Affiche le lien Blog dans l’en-tête
          navigation: 'header-end',

          // Adresse du blog : /blog/
          prefix: 'blog',

          // Affiche le temps de lecture
          metrics: {
          readingTime: true,
          words: 'rounded',
          },

          // Le flux RSS sera généré automatiquement
          // puisque l’option Astro "site" est définie.
          rss: true,
        }),
      ],

      // --- Sidebar de la documentation ---
      sidebar: [
        {
          label: 'Systèmes',
          autogenerate: {
            directory: 'systemes',
            collapsed: true,
          },
        },
        {
          label: 'Virtualisation',
          autogenerate: {
            directory: 'virtualisation',
            collapsed: true,
          },
        },
        {
          label: 'Réseaux',
          autogenerate: {
            directory: 'reseaux',
            collapsed: true,
          },
        },
        {
          label: 'Services',
          autogenerate: {
            directory: 'services',
            collapsed: true,
          },
        },
        {
          label: 'Logiciels',
          autogenerate: {
            directory: 'logiciels',
            collapsed: true,
          },
        },
        {
          label: 'Langages',
          autogenerate: {
            directory: 'langages',
            collapsed: true,
          },
        },
        {
          label: 'Hardware',
          autogenerate: {
            directory: 'hardware',
            collapsed: true,
          },
        },
      ],
    }),

    sitemap(),
  ],
});