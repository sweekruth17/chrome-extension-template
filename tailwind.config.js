/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./**/*.{ts,tsx}"],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        popup: ["Inter"]
      }
    }
  }
}
