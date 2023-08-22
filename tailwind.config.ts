import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f3f4f6",

          secondary: "#343232",

          accent: "#343232",

          neutral: "#272626",

          "base-100": "#000000",

          info: "#0000ff",

          success: "#008000",

          warning: "#ffff00",

          error: "#ff0000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
