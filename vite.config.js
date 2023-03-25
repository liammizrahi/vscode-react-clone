import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import babel from '@rollup/plugin-babel';

export default defineConfig({
    plugins: [
        babel({
            babelrc: true, // use the .babelrc file
            exclude: 'node_modules/**',
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        }),
        react()
    ],
    build: {
        outDir: "dist",
        emptyOutDir: true,
        sourcemap: true,
        minify: true,
        rollupOptions: {
            input: "src/index.js",
        },
    },
    esbuild: {
        jsxFactory: 'React.createElement',
        jsxFragment: 'React.Fragment',
        loader: {
            ".js": "jsx", // use "jsx" loader for JS files
        },
    },
});
