/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg_image': "url('../public/netflixbg.jpg')",
      }
    },
  },
  plugins: [],
}


// extend: {
//   backgroundImage: {
//     'hero-pattern': "url('/img/hero-pattern.svg')",
//     'footer-texture': "url('/img/footer-texture.png')",
//   }