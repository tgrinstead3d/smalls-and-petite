export default {
  title: 'Product variant',
  name: 'productVariant',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Weight in grams',
      name: 'grams',
      type: 'number',
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
    },
    {
      title: 'SKU',
      name: 'sku',
      type: 'string',
    },
    {
      title: 'Taxable',
      name: 'taxable',
      type: 'boolean',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      title: 'Bar code',
      name: 'barcode',
      type: 'barcode',
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
}
