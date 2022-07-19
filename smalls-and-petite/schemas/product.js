export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            title: 'Default variant',
            name: 'defaultProductVariant',
            type: 'productVariant',
        },
        {
            title: 'Variants',
            name: 'variants',
            type: 'array',
            of: [
                {
                    title: 'Variant',
                    type: 'productVariant',
                },
            ],
        },
        {
            title: 'Tags',
            name: 'tags',
            type: 'array',
            of: [
                {
                    type: 'string',
                },
            ],
            options: {
                layout: 'tags',
            },
        },
        {
            name: 'vendor',
            title: 'Vendor',
            type: 'reference',
            to: {type: 'vendor'},
        },
        {
            name: 'blurb',
            title: 'Blurb',
            type: 'localeString',
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: {type: 'category'},
                },
            ],
        },
        {
            name: 'description',
            title: 'Description',
            type: 'localeBlockContent',
        },
        {
            name: 'illustrations',
            title: 'Number of Illustrations',
            type: 'localeString',
        },
        {
            name: 'tall',
            title: 'Number of Tall Stakes',
            type: 'localeString',
        },
        {
            name: 'short',
            title: 'Number of Short Stakes',
            type: 'localeString',
        },
        {
            name: 'vertical',
            title: 'Number of Vertical Supports',
            type: 'localeString',
        },
        {
            name: 'personalized',
            title: 'Personalized Content Options Based On Occasion',
            type: 'localeString',
        },
        {
            name: 'materials',
            title: 'Materials',
            type: 'localeString',
        },
        {
            name: 'customization',
            title: 'How To Customize',
            type: 'localeString',
        },
    ],

    preview: {
        select: {
            title: 'title',
            manufactor: 'manufactor.title',
            media: 'defaultProductVariant.images[0]',
        },
    },
}
