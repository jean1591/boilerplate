import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        pastel: {
          green: "#519975",
          red: "#B89076",
        },
      },
    },
  },
  plugins: [],
};
export default config;
