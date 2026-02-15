export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFA600",
        dark: "#3E1900",
        light: "#FFF9F3",
      },
      fontFamily: {   // <-- F besar
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
