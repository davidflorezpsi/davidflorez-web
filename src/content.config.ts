import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** Para buscadores, cuando el título o la descripción no caben (60 y 155 caracteres). */
    tituloSeo: z.string().max(60).optional(),
    descripcionSeo: z.string().max(155).optional(),
    pubDate: z.coerce.date(),
    /** Solo cuando hubo una revisión sustantiva del contenido, no un retoque. */
    updatedDate: z.coerce.date().optional(),
    /** Página de servicio relacionada (slug de paginas-servicio.ts). */
    servicio: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
