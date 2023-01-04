import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured menu categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Featured Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dsc',
      title: 'Featured description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'restaurants',
      title: 'Featured restaurants',
      type: 'array',
      of: [{type: 'reference', to: {type: 'restaurant'}}],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
