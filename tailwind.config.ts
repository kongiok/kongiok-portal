import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{css,scss,sass,less,styl,stylus}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsla(var(--color-primary))",
        "on-primary": "hsla(var(--color-on-primary))",
        secondary: "hsla(var(--color-secondary))",
        "on-secondary": "hsla(var(--color-on-secondary))",
        tertiary: "hsla(var(--color-tertiary))",
        "on-tertiary": "hsla(var(--color-on-tertiary))",
        success: "hsla(var(--color-success))",
        "on-success": "hsla(var(--color-on-success))",
        warning: "hsla(var(--color-warning))",
        "on-warning": "hsla(var(--color-on-warning))",
        danger: "hsla(var(--color-danger))",
        "on-danger": "hsla(var(--color-on-danger))",
        neutral: "hsla(var(--color-neutral))",
        "on-neutral": "hsla(var(--color-on-neutral))",
      },
      fontFamily: {
        title: ["GenSekiGothic"],
        subtitle: ["Iansui", "LXGWWenKai"],
        heading: ["GenWanMin"],
        sans: ["GenSekiGothic", "sans-serif"],
        mono: ["FiraCode"],
        serif: ["GenWanMin", "Iansui", "LXGWWenKai"],
      },
      animation: {
        "typing": "typing 3s steps(22) 1s forwards infinite, blink-caret 0.5s steps(1) infinite",
      },
    }
  },
  plugins: [],
};
export default config;
