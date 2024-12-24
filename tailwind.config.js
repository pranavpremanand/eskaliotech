/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DD2930",
        // 'primary': '#111111',
        // 'primary': '#19191a',
        // 'secondary': '#EC1820',
        secondary: "#5081a1",
      },
      boxShadow: {
        large: "0px 0px 30px 10px",
      },
    },
  },
  plugins: [],
};
