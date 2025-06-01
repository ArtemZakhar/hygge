import js from '@eslint/js';
import json from '@eslint/json';
import markdown from '@eslint/markdown';

import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      js,
      react: pluginReact,
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      'react/jsx-uses-react': 'off', // for React 17+
      'react/react-in-jsx-scope': 'off', // for React 17+
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    extends: [
      ...tseslint.configs.recommended,
      'plugin:react/recommended',
      'plugin:prettier/recommended',
    ],
  },

  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
  },

  {
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/commonmark',
    extends: ['markdown/recommended'],
  },
]);
