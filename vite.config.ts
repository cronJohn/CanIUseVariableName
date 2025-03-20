import { sveltekit } from '@sveltejs/kit/vite';
import UnoCSS from '@unocss/svelte-scoped/vite'
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
        UnoCSS({
            injectReset: "@unocss/reset/sanitize/sanitize.css",
        }),
        sveltekit(),
    ],
});
