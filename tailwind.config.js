/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // for Next.js app directory
    "./pages/**/*.{js,ts,jsx,tsx}", // for pages directory
    "./components/**/*.{js,ts,jsx,tsx}", // for components folder
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f39f59",
        secondary: "#f39f5a",
        accent: "#10B981",
        dark: "#111827",
        light: "#F3F4F6",
      },
    },
  },
  plugins: [],
};
