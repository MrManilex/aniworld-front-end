/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [,
    "./src/components/*",
    "./src/page/**/*"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
