import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://{s-sugawara-alistyle}.github.io/',
    outDir: "./docs",
    base: '/{alistyle-sns}'
});
