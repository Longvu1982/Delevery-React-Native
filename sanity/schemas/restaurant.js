import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dsc',
      title: 'Description for your restaurant',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Address of your restaurant',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating of your restaurant',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5).error("Between 1 and 5 stars"),
    }),
    defineField({
      name: 'mainImage',
      title: 'Restaurant image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes of your restaurant',
      type: 'array',
      of: [{type: 'reference', to: {type: 'dish'}}],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
