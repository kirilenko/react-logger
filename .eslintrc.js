const internalPackages =
  'api|assets|components|constants|contexts|domain|hocs|hooks|utils'

const styleExtensions = '\\.style$|\\.s?css$'

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended', // -make sure this is always the last element in the array.
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'hooks',
    'import',
    'jsx-a11y',
    'sort-keys-fix',
    'simple-import-sort',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-unused-expressions': 'off', // - for <condition> && <expression>

    'hooks/sort': [
      2,
      {
        groups: [
          'useReducer',
          'useContext',
          'useState',
          'useRef',
          'useDispatch',
          'useCallback',
          'useEffect',
        ],
      },
    ],

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    'import/no-extraneous-dependencies': 'off', // - for import in vite.config ets

    'import/prefer-default-export': 'off', // - for reexport from index

    'no-redeclare': 'off', // - for typescript fn-overloading

    'no-restricted-exports': 'off', // - for export { default } from somewhere

    'no-underscore-dangle': 'off', // - for typescript getters/setters

    'no-unused-vars': 'warn',

    'prettier/prettier': [
      'error',
      {},
      { endOfLine: 'auto', usePrettierrc: true },
    ],

    'react/function-component-definition': 'off', // - for defining component as a function-declaration

    'react/jsx-filename-extension': [0],

    'react/jsx-props-no-spreading': 'off', // - for props spreading in jsx

    'react/jsx-uses-react': 'off', // - for removing React imports

    'react/react-in-jsx-scope': 'off', // - for removing React imports

    'react/require-default-props': 'off', // - disable SomeComponent.defaultProps defining
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // External `react` packages come first.
          ['^react', `^(?!${internalPackages}|\\./|\\.\\./|\\u0000)`],

          // Imports w/o from.
          ['^\\u0000'],

          // Internal packages.
          [
            `^(${internalPackages})(?!${styleExtensions})`,

            // Parent imports. Put `..` last.
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',

            // Other relative imports. Put same-folder imports and `.` last.
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
          ],

          // Style imports.
          [`^.+${styleExtensions}`],
        ],
      },
    ],

    'sort-keys-fix/sort-keys-fix': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },

    react: { version: 'detect' },
  },
}
