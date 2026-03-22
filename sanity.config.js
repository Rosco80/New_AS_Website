import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './studio/schemas'

export default defineConfig({
    name: 'default',
    title: 'Autoflow Solutions',

    projectId: 'jx2v251c',
    dataset: 'production',

    plugins: [
        deskTool(),
        visionTool(),
    ],

    schema: {
        types: schemaTypes,
    },
})
