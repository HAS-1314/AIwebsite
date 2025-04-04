import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import vercel from "@astrojs/vercel/serverless";
export default {
  adapter: vercel({
    runtime: 'nodejs20.x'  // 明确指定使用 Node.js 20
  })
}
// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: "https://ai-win.baigesec.space",
  integrations: [tailwind(), mdx(), sitemap(), icon()],
  adapter: vercel(),
});
