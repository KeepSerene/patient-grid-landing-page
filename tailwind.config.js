/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "rgba(42, 8, 150)",
        secondary: "rgb(135, 206, 250)",
        "custom-gray": "rgba(217, 217, 217, 0.5)",
        "custom-light-blue": "rgb(221, 233, 255)",
        "btn-secondary": "rgb(68, 130, 194)",
      },

      colors: {
        primary: "rgb(40, 40, 40)",
        secondary: "rgba(40, 40, 40, 0.7)",
        "bg-primary": "rgba(42, 8, 150)",
        "bg-secondary": "rgb(135, 206, 250)",
        "btn-bg-secondary": "rgb(68, 130, 194)",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
