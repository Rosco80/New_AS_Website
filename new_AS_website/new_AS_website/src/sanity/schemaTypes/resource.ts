import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Logistics', value: 'Logistics' },
          { title: 'Healthcare', value: 'Healthcare' },
          { title: 'E-Commerce', value: 'E-Commerce' },
          { title: 'Professional Services', value: 'Professional Services' },
          { title: 'General', value: 'General' },
          { title: 'Legal', value: 'Legal' },
          { title: 'SaaS', value: 'SaaS' }
        ]
      }
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'E-Book', value: 'E-Book' },
          { title: 'Blueprint', value: 'Blueprint' },
          { title: 'Webinar', value: 'Webinar' },
          { title: 'Calculator', value: 'Calculator' },
          { title: 'Case Study', value: 'Case Study' }
        ]
      }
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: 'meta',
      title: 'Meta Label',
      type: 'string',
    }),
    defineField({
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
    }),
    defineField({
      name: 'visualType',
      title: 'Visual Type',
      type: 'string',
      options: {
        list: [
          { title: 'Text/Custom Label', value: 'text' },
          { title: 'SVG Icon', value: 'svg' },
          { title: 'Calculator', value: 'calculator' },
          { title: 'Webinar', value: 'webinar' },
          { title: 'Code Snippet', value: 'code' },
          { title: 'Results Text', value: 'results' },
        ],
      },
      initialValue: 'text'
    }),
    defineField({
      name: 'visualText',
      title: 'Visual Text (if Visual Type is Text)',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Resource URL',
      type: 'url',
    }),
  ],
});
