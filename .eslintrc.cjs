module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:svelte/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:storybook/recommended'
	],
	plugins: ['@typescript-eslint', 'svelte'],
	ignorePatterns: ['*.cjs'],
	overrides: [
		{
			files: ['*.svelte'],
			globals: {
				svelte: true
			},
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: {
					ts: '@typescript-eslint/parser',
					js: 'espree',
					typescript: '@typescript-eslint/parser'
				}
			}
		}
	],
	parserOptions: {
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
