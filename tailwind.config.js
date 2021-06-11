module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'grayish-light': '#d9d5ca',
        'grayish-dark': '#4e4a40',
        'orange': '#bfa760',
        'choco': '#7D776C',
      }
    },
    screens: {
      'mobile': '375px',
      'sm': '640px',
      'md': '768px',
      'ipad': '875px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
