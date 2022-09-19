/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#d1d5db",

          "secondary": "#b45309",

          "accent": "#155e75",

          "neutral": "#1c1917",

          "base-100": "#292524",

          "info": "#22d3ee",

          "success": "#84cc16",

          "warning": "#eab308",

          "error": "#dc2626",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
  content: [
    "./src/components/**/*",
    "./src/pages/**/*"
  ],
}