import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'AI Strategy', value: 'AI Strategy' },
          { title: 'Automation Pipelines', value: 'Automation Pipelines' },
          { title: 'Case Studies', value: 'Case Studies' },
          { title: 'SME Growth', value: 'SME Growth' },
          { title: 'Engineering', value: 'Engineering' },
        ],
        layout: 'dropdown'
      },
    }),
    defineField({
      name: 'visualType',
      title: 'Thumbnail Visual Style',
      type: 'string',
      options: {
        list: [
          { title: 'AI Visual (Text in Middle)', value: 'ai-visual' },
          { title: 'Accent Colors', value: 'accent' },
          { title: 'Lines', value: 'lines' },
          { title: 'SVG Circles', value: 'svg-circles' },
          { title: 'Box', value: 'box' },
        ],
      },
    }),
    defineField({
      name: 'visualText',
      title: 'Visual Text (for AI Visual or Accent)',
      type: 'string',
    }),
  ],
});
