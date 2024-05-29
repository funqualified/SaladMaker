import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/salad/",

  plugins: [react(), sentryVitePlugin({
    org: "funqualified",
    project: "funqualified-apps"
  })],

  build: {
    sourcemap: true
  }
});