/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css,jsx}"],
  theme: {
    extend: {
      colors: {
        "Green": "#36A635",
        "Blue": "#006CEB",
        "Red": "#E02500",
        "Black": "#0F0F0F",
        "Grey": "#666666",
      },
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1440px',
        xl: '1728px',
      },
      fontFamily: {
        'open-sans': ['"Open Sans"', 'sans-serif'],
        'roboto': ['"Roboto"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
