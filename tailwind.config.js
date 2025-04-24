/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      spacing: {
        md: "96px",
        lg: "160px",
      },
      colors: {
        dark: 'var(--color-dark)',
        light: 'var(--color-light)',
        red: 'var(--color-red)',
        green: {
          light: 'var(--color-green-light)',
          dark: 'var(--color-green-dark)',
        },
        grey: {
          light: 'var(--color-grey-light)',
          dark: 'var(--color-grey-dark)',
        }
      },
      fontFamily: {
        'main': ['neue-haas-unica', 'sans-serif'],
        'button': ['microgramma-extended', 'sans-serif'],
        'mono': ['space-mono', 'sans-serif'],
      }
    },
  },
  safelist: [
    { pattern: /^text-(dark|light|red|green-light|green-dark|grey-light|grey-dark)$/ },
    { pattern: /^bg-(dark|light|red|green-light|green-dark|grey-light|grey-dark)$/ },
  ],
  plugins: [],
}