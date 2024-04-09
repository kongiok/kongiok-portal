/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        surface: "hsla(var(--color-surface))",
        "surface-foreground": "hsla(var(--color-surface-foreground))",
      },
    },
    plugins: [],
  }
}
