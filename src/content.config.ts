import { file } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import { type Technology } from "./lib/utils";

export const projectsSchema = z.object({
  title: z.string(),
  description: z.string(),
  website: z.string().optional(),
  github: z.string().optional(),
  image: z.string().array(),
  technologies: z.array(z.custom<Technology>()),
  bulletPoints: z.array(z.string()),
  color: z.string(),
  featured: z.boolean(),
});

export const experienceSchema = z.object({
  logo: z.string(),
  website: z.string(),
  company: z.string(),
  position: z.string(),
  startDate: z.string(),
  endDate: z.string().optional(),
  bulletPoints: z.array(z.string()),
  technologies: z.array(z.custom<Technology>()).optional(),
});

const experience = defineCollection({
  loader: file("src/content/experience.json", {
    parser: (text) => {
      return JSON.parse(text);
    },
  }),
  schema: experienceSchema,
});


const projects = defineCollection({
  loader: file("src/content/projects.json", {
    parser: (text) => {
      return JSON.parse(text);
    },
  }),
  schema: projectsSchema,
});

export const collections = {
  experience,
  projects,
};
