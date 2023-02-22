/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },

    keyframes: {
      top: {
        '0%': { transform: 'translateY(-30px)', opacity: 0, },
        '100%': { transform: 'translateY(0px)', opacity: 1 }
      },
      bottom: {
        '0%': { transform: 'translateY(30px)', opacity: 0, },
        '100%': { transform: 'translateY(0px)', opacity: 1 }
      },
      left: {
        '0%': { transform: 'translateX(-30px)', opacity: 0, },
        '100%': { transform: 'translateX(0px)', opacity: 1 }
      },
      leftOpacity: {
        '0%': { transform: 'translateX(-30px)', opacity: 0, },
        '100%': { transform: 'translateX(0px)', opacity: 0.6 }
      },
      right: {
        '0%': { transform: 'translateX(30px)', opacity: 0, },
        '100%': { transform: 'translateX(0px)', opacity: 1 }
      },
      bounce: {
        '0%': { transform: 'translateY(-30px)' },
        '50%': { transform: 'translateY(20px)' },
        '100%': { transform: 'translateY(-30px)' },
      }

    },
    animation: {
      top: 'top  ease 0.5s  backwards',
      top6: 'top  ease 0.5s  backwards',
      bottom: 'bottom  ease 0.5s  backwards',
      left: 'left ease 0.5s backwards',
      left4: 'left  ease  0.5s  backwards',
      left6: 'left  ease  0.5s  backwards',
      left8: 'left  ease  0.5s  backwards',
      left10: 'left  ease  0.5s  backwards',
      left12: 'leftOpacity  ease  0.5s  backwards',
      right: 'right  ease 0.5s  backwards',
      bounce: 'bounce ease 2.4s infinite',
    },
  },
  plugins: [],
};