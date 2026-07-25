import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    track: z.enum(['generative', 'systems', 'agents']),
    type: z.enum(['note', 'essay']).default('note'),
    status: z.enum(['seed', 'growing', 'evergreen']).default('seed'),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const log = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/log' }),
  schema: z.object({
    date: z.coerce.date(),
    papers: z
      .array(
        z.object({
          title: z.string(),
          url: z.string().url().optional(),
        })
      )
      .optional(),
  }),
});

export const collections = { posts, log };
