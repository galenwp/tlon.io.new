import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {codeInput} from '@sanity/code-input'
import {vercelDeployTool} from 'sanity-plugin-vercel-deploy'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Tlon.io',

  projectId: '4vy6phvk',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), codeInput(), vercelDeployTool()],

  schema: {
    types: schemaTypes,
  },
})
