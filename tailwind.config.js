/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',     // Extra small screen
        'sm': '640px',     // Small screen
        'md': '768px',     // Medium screen
        'lg': '1024px',    // Large screen
        'xl': '1280px',    // Extra large screen
        '2xl': '1536px',
        '3xl': '1736px',   // 2x extra large screen
      },

      colors : {
        pinkText : '#eb34e5',
        pinkishWhite : '#fef8f8',
        purpleText : '#7f82af',
        blackText : '#28252b',
        textWhite : '#fcf7f4'
        // shadedBlue: '#7bc1fb',
        // blushPink : '#eda0cb',
        // textColor: '#2e1e4d',
        // purpleFrom : '#faedfe',
        // purpleTo : '#f1e2fa',
        // bgColor : '#f2f2f2',
      },



      // animation keyframes 
      keyframes: {
        spinCustom: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        spawnNav: {
          '0%': { opacity: '0' , },
          '100%': { opacity: '1' , }, // Adjust maxHeight based on your content size
        },
        hideNav: {
          '0%': { opacity: '1' , },
          '100%': { opacity: '0' , }, // Adjust maxHeight based on your content size
        },
        expand: {
          '0%': { marginTop : '100px', opacity: '0' },
          '100%': { marginTop: '0', opacity: '1' }, // Adjust maxHeight based on your content size
        },
        contract: {
          '0%': { maxHeight: '500px', opacity: '1', transform: 'scaleY(1)' },
          '100%': { maxHeight: '0', opacity: '0', transform: 'scaleY(0.9)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
        

      },
      animation: {
        spinCustom: 'spinCustom 10s linear infinite',
        // spawnNav: 'spawnNav 1s ease-in-out ', // Custom expand animation
        spawnNav: 'spawnNav 0.3s ease forwards',
        hideNav: 'hideNav 0.3s ease forwards',
        expand: 'expand 0.3s ease-in-out', // Custom expand animation
        contract: 'contract 0.3s ease-in', // Custom expand animation
        scroll: 'scroll 40s linear infinite', // Adjust duration as needed
        fadeIn: 'fadeIn 0.5s ease-out'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Set Inter as the primary sans font
      },

      boxShadow: {
        'custom-equal': '-2px 0px 10px 5px rgba(0, 0, 0, 0.1)', // yeh chaaron sides ke liye hai
      },

      fontFamily: {
        orbitron : ["Orbitron", "sans-serif"], 
        mPlus : ["M PLUS Rounded 1c", "sans-serif"], // 
        kaushans : ["Kaushan Script", "cursive" ], // 


      },
    },
  },
  plugins: [],
}