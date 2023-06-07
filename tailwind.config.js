/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        150: '150px',
        190: '190px',
        225: '225px',
        275: '275px',
        300: '300px',
        340: '340px',
        350: '350px',
        375: '375px',
        460: '460px',
        656: '656px',
        880: '880px',
        508: '508px',
      },
      height: {
        80: '80px',
        150: '150px',
        225: '225px',
        300: '300px',
        340: '340px',
        370: '370px',
        420: '420px',
        510: '510px',
        600: '600px',
        650: '650px',
        685: '685px',
        800: '800px',
        900: '900px',
        '90vh': '90vh',
      },
      minWidth: {
        210: '210px',
        350: '350px',
        620: '620px',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        mainColor: '#4B4453',
        mainTextColor: '#4B445390',
        mainTextGrey: '#c3c5c9',
        mainBlack: '#2e2e2e',
        headingColor: '#845EC2',
        logoColor: '#B39CD0',
        itemBg: '#B39CD060',
        hoverColor: '#B39CD080',
        hoverColorShadow: '0 2px 6px 0 grey',
        headerBgColor: 'rgba(237, 230, 245,0.9)',
        textColor: '#515151',
        cartNumBg: '#e80013',
        primary: '#f5f3f3',
        cardOverlay: 'rgba(256,256,256,0.4)',
        lighttextGray: '#9ca0ab',
        card: 'rgba(256,256,256,0.8)',
        cartBg: '#282a2c',
        mainGrey: '#343538',

        cartItem: '#2e3033',
        cartTotal: '#343739',
      },
    },
  },
  plugins: [],
};
