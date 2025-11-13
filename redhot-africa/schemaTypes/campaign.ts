import { defineType, defineField } from "sanity";

export const campaign = defineType({
  name: "campaign",
  title: "Campaign",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "impact",
      title: "Impact",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "string",
    }),
    defineField({
      name: "goal",
      title: "Goal",
      type: "string",
    }),
    defineField({
      name: "learnMore",
      title: "Learn More Sections",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "getInvolved",
      title: "Get Involved Sections",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
