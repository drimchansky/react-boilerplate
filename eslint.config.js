import { FlatCompat } from '@eslint/eslintrc'
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist'
import eslintPluginTypeScript from 'typescript-eslint'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname
})

export default [
  {
    ignores: ['**/dist/', '**/.history/', '**/vite.config.ts']
  },
  ...compat.extends('eslint-config-standard'),
  ...compat.extends('eslint-config-prettier'),
  {
    plugins: {
      perfectionist: eslintPluginPerfectionist
    },
    rules: {
      'perfectionist/sort-imports': [
        'error',
        {
          groups: [
            'type-import',
            ['value-builtin', 'value-external'],
            'type-internal',
            'value-internal',
            ['type-parent', 'type-sibling', 'type-index'],
            ['value-parent', 'value-sibling', 'value-index'],
            'ts-equals-import',
            'unknown'
          ],
          ignoreCase: true,
          internalPattern: ['^@/.+'],
          newlinesBetween: 1,
          order: 'asc',
          type: 'alphabetical'
        }
      ]
    }
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: eslintPluginTypeScript.parser,
      parserOptions: {
        project: true
      }
    },
    plugins: {
      '@typescript-eslint': eslintPluginTypeScript.plugin
    },
    rules: {
      ...eslintPluginTypeScript.configs.recommended.rules
    }
  }
]
