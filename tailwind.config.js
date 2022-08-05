module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      extra_md: "1280px",
      md:"768px"
    },
    extend: {
      fontFamily: {
        'quicksand': "'Quicksand',sans-serif",
        'poppins': "'Poppins',sans-serif",
      }
    }
  },
  plugins: [],
}
