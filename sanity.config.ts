/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { buildLegacyTheme, defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { frFRLocale } from "@sanity/locale-fr-fr";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { schema } from "@/sanity/schema";
import { visionTool } from "@sanity/vision";

const props = {
  "--my-white": "#fff",
  "--my-black": "#1a1a1a",
  "--my-blue": "#4285f4",
  "--my-red": "#db4437",
  "--my-yellow": "#f4b400",
  "--my-green": "#0f9d58",
};

const myTheme = buildLegacyTheme({
  /* Base theme colors */
  "--black": props["--my-black"],
  "--white": props["--my-white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--my-white"],
  "--component-text-color": props["--my-black"],

  /* Brand */
  "--brand-primary": props["--my-blue"],

  // Default button
  "--default-button-color": "#666",
  "--default-button-primary-color": props["--my-blue"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-warning-color": props["--my-yellow"],
  "--default-button-danger-color": props["--my-red"],

  /* State */
  "--state-info-color": props["--my-blue"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],

  /* Navbar */
  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],

  "--focus-color": props["--my-blue"],
});

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [frFRLocale(), structureTool(), visionTool()],
  theme: myTheme,
});
