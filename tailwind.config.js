/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Puoi aggiungere colori personalizzati qui
        // 'primary': '#3B82F6',
      },
      fontFamily: {
        // Puoi aggiungere font personalizzati qui
        // 'sans': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
