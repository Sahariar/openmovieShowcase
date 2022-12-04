/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#3a08af",
        
"secondary": "#d37847",
        
"accent": "#f9c970",
        
"neutral": "#1E232E",
        
"base-100": "#292645",
        
"info": "#82BEF3",
        
"success": "#0D6D44",
        
"warning": "#B08907",
        
"error": "#E72354",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}
