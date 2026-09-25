import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
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
