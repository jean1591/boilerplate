import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DCE4E8",
        "primary-content": "#1D2B36",
        secondary: "#3F6E93",
        "secondary-content": "#83B5C4",
      },
    },
  },
  plugins: [],
};
export default config;
