import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['frontend/src/main.jsx'],
            refresh: true,
        }),
        react(),
    ],
    server: {
    host: '127.0.0.1',
    port: 5173
    },
    root: 'frontend',
    build: {
        outDir: '../public/build',
        emptyOutDir: true,
        manifest: true,
    },
});
