/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '1350': '1250px',
        '550': '550px'
      },
      height: {
        '850': '750px',
      },
      boxShadow:{ 
          'box1': '0 0 10px 5px #48abe0',   
          'box2': ' 0 0 20px 7px #ebecca',
          'box3': '0 0 25px 20px #8a2be2'
        },
        
      }
    },
  
  plugins: [],
}

