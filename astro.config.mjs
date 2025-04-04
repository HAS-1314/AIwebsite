import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  outDir: './dist',
  site: "https://www.aibar.app",
  integrations: [tailwind(), mdx(), sitemap(), icon()],
  adapter: cloudflare(),
});
