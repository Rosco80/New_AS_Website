export default {
    name: 'caseStudy',
    title: 'Case Study',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: Rule => Rule.required(),
        },
        {
            name: 'client',
            title: 'Client Name',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            description: 'A short summary shown in the case studies grid.',
            validation: Rule => Rule.max(200).required(),
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'industry',
            title: 'Industry',
            type: 'string',
            description: 'e.g. "E-commerce", "Healthcare", "Logistics"',
        },
        {
            name: 'results',
            title: 'Key Results',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'List key outcomes, e.g. "40% increase in leads"',
        },
        {
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            validation: Rule => Rule.required(),
        },
        {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [{ type: 'block' }],
        },
    ],
}
