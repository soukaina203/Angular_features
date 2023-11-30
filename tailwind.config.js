/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  mode: 'jit',
  corePlugins: {
    preflight: false,
    // This will ensure no CSS reset is done
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

