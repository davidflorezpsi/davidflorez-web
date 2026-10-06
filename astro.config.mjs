// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://davidflorez.co',
  integrations: [
    sitemap({
      // /pagar/ se comparte por WhatsApp y /condiciones/ publica la dirección
      // de notificación judicial (el domicilio de David): no son para buscadores.
      filter: (pagina) => !['/pagar/', '/condiciones/'].some((ruta) => pagina.includes(ruta)),
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
