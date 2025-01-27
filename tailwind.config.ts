import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "7xl": "1728px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "violet-dark": "var(--color-violet-dark)",
        "gray-100": "var(--color-gray-100)",
        "gray-200": "var(--color-gray-200)",
        "gray-500": "var(--color-gray-500)",
        "gray-600": "var(--color-gray-600)",
        "gray-900": "var(--color-gray-900)",
      },
    },
  },
  plugins: [],
} satisfies Config;
