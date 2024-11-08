/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {  
      colors: {  
        'config-green': '#337745',  
        'config-hover-green': '#045527',  
        'config-orange': '#fea858',  
      },  
    },  
  },
  plugins: [],
}

