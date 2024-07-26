import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "jet-black": "#0C0C0C",
        purple: "#7C42F3",
        "dark-blue": "#202B46",
        pink: "#F000FF",
        gray: "#F5F6FB",
        "char-coal": "#161616",
      },
      backgroundImage: {
        "graph-pink": 'url("/assets/graph/graph-footer.svg")',
        "graph-gray": 'url("/assets/graph/graph-gray-footer.svg")',
      },
      container: {
        screens: {
          xl: "1440px",
        },
        center: true,
      },
    },
  },
  plugins: [],
};
export default config;
