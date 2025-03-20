import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const isDev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
        appDir: 'app',
		adapter: adapter({
			fallback: undefined,
			precompress: false,
			strict: true
		}),
        paths: {
            base: isDev ? '' : '/CanIUseVariableName',
        }
	},
};

export default config;
