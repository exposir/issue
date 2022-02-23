// theme
import { SairinConfig } from "@sairinjs/core";
import BlogTheme from "@sairinjs/sairin-theme-minimal";

export default {
  siteConfig: {
    title: "Expo",
  },
  theme: BlogTheme,
  themeConfig: {
    title: `Exposir`,
    links: [
      {
        title: "GitHub",
        url: "https://github.com/exposir",
      },
      {
        title: "Twitter",
        url: "https://twitter.com/ExposirM",
      },
    ],
  },
} as SairinConfig;
