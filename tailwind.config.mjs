/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0F6680',
          dark: '#0A4A5E',
          mid: '#4BA5BF',
          light: '#C0DDE6',
          wash: '#DCF0F5',
        },
        page: '#F5F9FA',
        heading: '#162A30',
        body: '#2E5F6E',
        muted: '#4BA5BF',
        surface: '#FFFFFF',
      },
      fontFamily: {
        sans: ['DM Sans', 'Noto Sans TC', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
