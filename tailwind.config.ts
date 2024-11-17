import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-orange': '#F27027',
        'main-red': "#D01E50",
        'main-red-shade': "rgba(208,30,80,0.50)",
        'main-yellow': "#FDD522",
        'main-blue': "#1D89CA",
        'Soft-Pink': "#FFE2EA",
        'Pale-Blue': "#D5F4FF",
        'Vanilla': "#F7F5DD",
      },
      fontFamily: {
        'author': ['Author-Variable', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      boxShadow:{
        'btn': "2px 2px 4px 0px rgba(0, 0, 0, 0.25)",
        'btn-shadow': '2px 2px 2px 0 rgba(0, 0, 0, 0.3)',
        'card-red': "4px 4px 4px 0px rgba(208, 30, 80, 0.25),4px 4px 30px 0px rgba(208, 30, 80, 0.20) ",
        'card-blue': "4px 4px 4px 0px rgba(29, 137, 202, 0.25),4px 4px 30px 0px rgba(29, 137, 202, 0.20)",
        
      },
      dropShadow:{
        'text': "2px 2px 4px 0px rgba(0, 0, 0, 0.25)",
        'text-shadow': '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'soft-red-Gradient': 'linear-gradient(90deg, rgba(233,233,233,0) 0%, rgba(255,241,245,1) 49%, rgba(217,217,217,0) 100%)',
      }
    },
  },
  plugins: [],
};
export default config;
