/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hacienda: {
          50: "#f6f7ef",
          100: "#ececd5",
          200: "#dbdaad",
          300: "#c6c27e",
          400: "#b5ad5a",
          500: "#a69a4c",
          600: "#978544",
          700: "#726036",
          800: "#615032",
          900: "#54452f",
          950: "#302518",
        },

        smartblue: {
          50: "#f2f9f9",
          100: "#ddedf0",
          200: "#bfdce2",
          300: "#93c3cd",
          400: "#5fa2b1",
          500: "#448797",
          600: "#3b6f7f",
          700: "#355c69",
          800: "#324d58",
          900: "#2d434c",
          950: "#1a2a32",
        },
      },
    },
  },
  plugins: [],
};
