import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('我'),
    category: z.enum(['个人记录', '交易日志', '投研思考']).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};