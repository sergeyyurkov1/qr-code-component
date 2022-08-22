/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.{html,js}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "hsl(0, 0%, 100%)",
      "gray-light": "hsl(212, 45%, 89%)",
      "blue-grayish": "hsl(220, 15%, 55%)",
      "blue-dark": "hsl(212, 45%, 89%)",
    },
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    fontSize: {},
    extend: {},
  },
  plugins: [],
};
