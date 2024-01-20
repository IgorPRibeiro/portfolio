import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "dark-nav-bar": "#040f1fd9",
      "background-dark": "#1a263c",
      "teal-400": "rgb(45 212 191)",
      red: " rgb(255,0,0)",
      white: "#fff"
    },
    textColor: {
      "blue-sky-400": "rgb(56 189 248)",
      "teal-400": "rgb(45 212 191)",
    },
  },
  plugins: [],
};
export default config;
