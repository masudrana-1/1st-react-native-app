/** @type {import('tailwindcss').Config} */
module.exports = {

  // fixed app folder name and all folder and file name extention can access 

  content: ["./app/**/*.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

