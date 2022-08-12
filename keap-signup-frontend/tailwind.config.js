/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css,jsx}"],
  theme: {
    extend: {
      colors: {
        Green: "#36A635",
        Blue: "#006CEB",
        Red: "#E02500",
        Black: "#0F0F0F",
        Grey: "#666666",
      },
      screens: {
        xsm: "320px",
        sm: "375px",
        md: "900px",
        lg: "1440px",
        xl: "1728px",
      },
      fontFamily: {
        "open-sans": ['"Open Sans"', "sans-serif"],
        roboto: ['"Roboto"', "sans-serif"],
      },
      fontSize: {
        "mobile-h1": "34px",
        "mobile-h2": "26px",
        "mobile-buttons": "20px",
        "mobile-body": "16px",
        "mobile-inputs": "18px",
        "mobile-errors": "14px",
        "mobile-legal": "12px",
        "desktop-h1": "88px",
        "desktop-h2": "40px",
        "desktop-buttons": "20px",
        "desktop-body": "20px",
        "desktop-inputs": "18px",
        "desktop-errors": "14px",
        "desktop-legal": "12px",
      },
    },
  },
  plugins: [],
};
