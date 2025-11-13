import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'book',
  title: 'Book',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
  name: 'category',
  title: 'Category',
  type: 'reference',
  to: [{ type: 'category' }],
  validation: (Rule) => Rule.required(),
}),

    defineField({
      name: 'ageRange',
      title: 'Age Range',
      type: 'string',
      options: {
        list: [
          'All Ages',
          '<9 years',
          '7–8 years',
          '8–11 years',
          '11–14 years',
          '14+ years',
          '15+ years',
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
    }),
    defineField({
      name: 'synopsis',
      title: 'Synopsis',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured Book?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'comingSoon',
      title: 'Coming Soon?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'purchaseLink',
      title: 'Purchase Link',
      type: 'url',
    }),
  ],
})
