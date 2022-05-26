
module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    // 'plugin:react-hooks/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  globals: {
    // NodeJS: true,
  },
  rules: {
    'object-shorthand': 'error',
    'no-extra-boolean-cast': 'error',
    'no-implicit-coercion': 'error',
    'no-unused-vars': [1, { vars: 'all', args: 'after-used', argsIgnorePattern: '^_|^next$', varsIgnorePattern: '^_' }],
    '@typescript-eslint/no-unused-vars': [
      1,
      { vars: 'all', args: 'after-used', argsIgnorePattern: '^_|^next$', varsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-empty-function': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-duplicate-imports': ['error', { includeExports: true }],
    quotes: [1, 'single'],
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: 'block' },
      { blankLine: 'always', prev: 'block', next: '*' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
    ],
    'jsx-quotes': ['warn', 'prefer-double'],

    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'next',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'next/**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@chakra-ui/**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'src/lib/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'src/components/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'src/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
}