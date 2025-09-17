import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['pharmacy', 'medical', 'residential']),
    featured: z.boolean().default(false),
    images: z.array(z.string()),
    publishDate: z.date(),
    tags: z.array(z.string()).optional(),
    client: z.string().optional(),
  }),
});

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number(),
    features: z.array(z.string()).optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    description: z.string(),
    category: z.enum(['apothekenplanung', 'praxiseinrichtung', 'einrichtungstrends', 'betriebsoptimierung', 'renovierung-modernisierung']),
    author: z.string().default('Rebekka Mädler'),
    publishDate: z.date(),
    featuredImage: z.string(),
    tags: z.array(z.string()).optional(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  'projects': projects,
  'services': services,
  'blog': blog,
};