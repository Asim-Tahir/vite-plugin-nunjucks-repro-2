import { defineConfig, loadEnv } from "vite";

import NunjucksPlugin from "vite-plugin-nunjucks";
// https://github.com/hannoeru/vite-plugin-pages
// import PagesPlugin from "vite-plugin-pages";

import path from "path";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, path.resolve(__dirname)) };

  // https://vitejs.dev/config/
  return defineConfig({
    plugins: [
      // @ts-ignore
      NunjucksPlugin({
        templatesDir: path.resolve(process.cwd(), "src", "pages"),
        variables: { "index.html": { username: "John" } },
      }),
      /* Pages({
        pagesDir: "src/pages",
        extensions: ["njk", "html"],
        nuxtStyle: true,
      }), */
    ],
    server: {
      port: parseInt(process.env.VITE_PORT) || 3000,
      cors: true,
      strictPort: false,
      hmr: true,
      fs: {
        strict: false,
        // Allow serving files from one level up to the project root
        // allow: ["./src/graphql/**/*.graphql"],
      },
      // proxy: {
      //   "/api": {
      //     target: process.env.VITE_API_KEY,
      //     changeOrigin: true,
      //     autoRewrite: true,
      //   },
      // },
      watch: {
        usePolling: true,
        useFsEvents: true,
      },
    },
    resolve: {
      alias: {
        "#": path.resolve(__dirname, "public"),
        "@": path.resolve(__dirname, "src"),
      },
    },
    define: { "process.env": process.env },
  });
};
