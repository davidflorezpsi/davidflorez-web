// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://davidflorez.co',
  integrations: [
    sitemap({
      // /pagar/ se comparte por WhatsApp; no es una página para buscadores.
      filter: (pagina) => !pagina.includes('/pagar/'),
    }),
  ],
  image: {
    // Las publicaciones de Instagram se descargan y optimizan en el build
    // (src/lib/instagram.ts): quien visita no hace ninguna petición a Meta.
    remotePatterns: [
      { protocol: 'https', hostname: '**.cdninstagram.com' },
      { protocol: 'https', hostname: '**.fbcdn.net' },
    ],
  },
});
