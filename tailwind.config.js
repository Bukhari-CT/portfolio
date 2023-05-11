/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        bodyFont: [ 'Raleway', 'sans-serif' ],
        titleFont: ['Raleway ', 'sans-serif'],
      },
      boxShadow: {
        navBarShadow:"0 10px 30px -10px rgba(2,12,27,0.7)" 
      },
      colors: {
        bodyColor: "#0A192F",
        textGreen: "#0fccce",
        textLight: "#ccd6f6",
        textDark: "#8892b0",
        hoverColor: "rgba(100,255,218,0.1)"
      },
      screens:{
        xs: "320px",
        sm:"375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg:"960px",
        lgl:"1024px",
        xl: "1280px"
      },
      maxWidth:{
        container: "1440px",
        contentContainer: "1140px",
        containerSmall: "1024px",
        containerxs: "768px",
      }
    },
  },
  plugins: [],
}
