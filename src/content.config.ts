import { defineCollection, z } from 'astro:content';

const songs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    album: z.string(),
    year: z.string(),
    slug: z.string().optional(),
    originalLang: z.string().default('eu'),
    translationLang: z.string().default('es')
  })
});

export const collections = { songs };
