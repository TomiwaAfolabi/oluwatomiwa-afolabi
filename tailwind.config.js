/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      xs: "230px",
      // => @media (min-width: 230px) { ... }
      sm: "430px",
      // => @media (min-width: 430px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      "md-s": "850px",
      // => @media (min-width: 768px) { ... }

      "md-x": "1024px",
      // => @media (min-width: 1024px) { ... }

      lg: "1150px",
      // => @media (min-width: 1024px) { ... }

      xl: "1700px",
      // => @media (min-width: 1280px) { ... }
    },
  },

  plugins: [],
};
