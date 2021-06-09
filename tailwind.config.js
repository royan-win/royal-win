module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'back-img': "url('https://wallpapercave.com/wp/wp2733006.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
