import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import vercel from "@astrojs/vercel/serverless";
export default {
  adapter: vercel()
}
// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: "https://ai-win.baigesec.space",
  integrations: [tailwind(), mdx(), sitemap(), icon()],
  adapter: vercel(),
});
