// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';
import starlightBlog from 'starlight-blog';
import sitemap from '@astrojs/sitemap';
import starlightThemeNova from 'starlight-theme-nova';
import mermaidBlocks from './src/plugins/mermaid-blocks.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.aktraizer.com',

  markdown: { remarkPlugins: [mermaidBlocks] },
  integrations: [
    starlight({
      // --- Informations générales ---
      title: 'Aktraizer Docs',

      head: [
    {
        tag: 'script',
        attrs: {
            src: 'https://stats.aktraizer.com/script.js',
            'data-website-id': 'be548dda-035e-4791-8a78-2aa528b1c8d6',
            'data-domains': 'docs.aktraizer.com',
            defer: true,
        },
    },
],

      customCss: ['./src/styles/custom.css', './src/styles/reading.css', './src/styles/print.css'],
      components: {
        PageFrame: './src/components/V2PageFrame.astro',
        PageTitle: './src/components/ArticleTitle.astro',
      },
      lastUpdated: true,
      expressiveCode: {
        themes: ['github-dark', 'github-light'],
        defaultProps: { frame: 'terminal' },
      },

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
          navigation: 'none',

          // Adresse du blog : /blog/
          prefix: 'blog',

          // Affiche le temps de lecture
          metrics: {
          readingTime: true,
          words: 'rounded',
          },

          // Le flux RSS sera généré automatiquement
          // puisque l’option Astro "site" est définie.
          // Le flux RSS est généré dès que site est défini.
        }),
        // Après le blog : Nova conserve son override MarkdownContent.
        starlightThemeNova({ nav: [
          { label: 'Accueil', href: '/' },
          { label: 'Systèmes', href: '/systemes/' },
          { label: 'Virtualisation', href: '/virtualisation/' },
          { label: 'Réseaux', href: '/reseaux/' },
          { label: 'Services', href: '/services/' },
          { label: 'Logiciels', href: '/logiciels/' },
          { label: 'Langages', href: '/langages/' },
          { label: 'Outils', href: '/outils/' },
          { label: 'Hardware', href: '/hardware/' },
          { label: 'IA', href: '/ia/' },
          { label: 'Blog', href: '/blog/' },
        ] }),
        starlightImageZoom(),
      ],

      // --- Sidebar de la documentation ---
      sidebar: [
        {
          label: '🖥️ Systèmes',
          autogenerate: {
            directory: 'systemes',
            collapsed: true,
          },
        },
        {
          label: '📦 Virtualisation',
          autogenerate: {
            directory: 'virtualisation',
            collapsed: true,
          },
        },
        {
          label: '🌐 Réseaux',
          autogenerate: {
            directory: 'reseaux',
            collapsed: true,
          },
        },
        {
          label: '⚙️ Services',
          autogenerate: {
            directory: 'services',
            collapsed: true,
          },
        },
        {
          label: '🧩 Logiciels',
          autogenerate: {
            directory: 'logiciels',
            collapsed: true,
          },
        },
        {
          label: '💻 Langages',
          autogenerate: {
            directory: 'langages',
            collapsed: true,
          },
        },
        {
          label: '🛠️ Outils',
          autogenerate: {
            directory: 'outils',
            collapsed: true,
          },
        },
        {
          label: '🔧 Hardware',
          autogenerate: {
            directory: 'hardware',
            collapsed: true,
          },
        },
        {
          label: '🤖 Intelligence Artificielle',
          autogenerate: {
            directory: 'IA',
            collapsed: true,
          },
        },
      ],
    }),

    sitemap(),
  ],
});