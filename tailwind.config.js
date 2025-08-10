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
        primary: "#451952",
        secondary: "#ae445a",
        tertiary: "#f39f5a",
        dark: "#1d1a39",
      },
    },
  },
  plugins: [],
};
