import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default("Matteo Gobbo"),
    tags: z.array(z.string()),
    language: z.enum(["en"]),
    publishedDate: z.date(),
    // isDraft: z.boolean(),
    // publishedIndex: z.number(),
    // canonicalURL: z.string().url(),
  }),
});

export const collections = {
  blog: blogCollection,
};
