import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  ignoreNoDocuments: true, // for better experience with the watcher
  // Temporarily generate from multiple schemas while we migrate
  // to the new API
  generates: {
    // New API (specifically tailored for the patient app)
    './app/patient-gql/': {
      schema: './patient-schema.graphql',
      documents: ['app/**/*.{ts,tsx}'],
      preset: 'client',
      plugins: [],
      config: {
        scalars: {
          ISO8601Date: 'string',
          ISO8601DateTime: 'string',
        },
        avoidOptionals: {
          field: true,
          inputValue: false, // allow undefined for optional input values
          object: false,
          defaultValue: false,
        },
      },
    },
  },
}

export default config
