/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      section: '#EDEDEC',
      'primary-button': '#BA967B',
    },
    textColor: {
      'dark-gray': '#343434',
      'primary-button': '#FFF',
    },
    borderColor: {
      'dark-gray': '#343434',
    },
    backgroundImage: {
      'request-form-section':
        'url("./src/shared/ui/assets/request-form-section-background.jpg")',
      girl: 'url("./src/shared/ui/assets/girl.jpg")',
      'graffiti-1-half-1': 'url("./src/shared/ui/assets/graffiti-1/1.png")',
      'graffiti-1-half-2': 'url("./src/shared/ui/assets/graffiti-1/2.png")',
      'graffiti-2-half-1': 'url("./src/shared/ui/assets/graffiti-2/1.png")',
      'graffiti-2-half-2': 'url("./src/shared/ui/assets/graffiti-2/2.png")',
      'graffiti-3-half-1': 'url("./src/shared/ui/assets/graffiti-3/1.png")',
      'graffiti-3-half-2': 'url("./src/shared/ui/assets/graffiti-3/2.png")',
    },
    extend: {},
  },
  plugins: [],
};
