/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{vue}",
    "./components/**/*.{vue}",
    "./layouts/**/*.{vue}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        fancy: ["Gwendolyn", "serif"],
        marker: ["Permanent Marker", "serif",],
        relaxed: ["Caveat", "serif"]
      },
      backgroundImage: {
        intoBackground: "url('@/assets/intro_background.jpg')",
      },
    },
  },
  plugins: [],
};

