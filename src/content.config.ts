import { defineCollection, z } from 'astro:content';

const songs = defineCollection({
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    artist: z.string().optional(),
    album: z.string(),
    year: z.string().optional(),
    originalLang: z.string().optional(),
    translationLang: z.string().optional(),
    badok_url: z.string().optional(),
    bandcamp_url: z.string().nullable().optional(),
    bandcamp_embed: z.string().optional(),
  }),
});

export const collections = { songs };