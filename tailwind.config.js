// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        roseBlue: "#0075FF",
      },
      width: {
        croo: "500px",
      },
    },
  },

  plugins: [],
};
