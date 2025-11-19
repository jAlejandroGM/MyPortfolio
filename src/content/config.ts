import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    type: z.enum(["academic", "professional", "profesional"]),
    image: z.string().nullable(),
    category: z.enum(["frontend", "backend", "fullstack"]),
    stack: z.array(z.string()),
    repo: z.string().url(),
    link: z.string().url().nullable(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
