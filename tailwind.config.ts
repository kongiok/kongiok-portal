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
        "primary-bg": "hsla(var(--color-primary-bg))",
        secondary: "hsla(var(--color-secondary))",
        "on-secondary": "hsla(var(--color-on-secondary))",
        "secondary-bg": "hsla(var(--color-secondary-bg))",
        tertiary: "hsla(var(--color-tertiary))",
        "on-tertiary": "hsla(var(--color-on-tertiary))",
        "tertiary-bg": "hsla(var(--color-tertiary-bg))",
        success: "hsla(var(--color-success))",
        "on-success": "hsla(var(--color-on-success))",
        "success-bg": "hsla(var(--color-success-bg))",
        warning: "hsla(var(--color-warning))",
        "on-warning": "hsla(var(--color-on-warning))",
        "warning-bg": "hsla(var(--color-warning-bg))",
        danger: "hsla(var(--color-danger))",
        "on-danger": "hsla(var(--color-on-danger))",
        "danger-bg": "hsla(var(--color-danger-bg))",
        neutral: "hsla(var(--color-neutral))",
        "on-neutral": "hsla(var(--color-on-neutral))",
      },
      fontFamily: {
        title: ["GenSekiGothic"],
        subtitle: ["Iansui", "LXGWWenKai"],
        heading: ["GenWanMin"],
        sans: ["GenSekiGothic", "sans-serif"],
        mono: ["FiraCode", "Iansui"],
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
