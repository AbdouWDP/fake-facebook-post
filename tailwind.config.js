/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        post: "#242526",
      },
      colors: {
        gray: "#B0B3B8",
      },
      width: {
        "nine-five": "95%",
      },
      height: {
        "nine-five": "95%",
      },
    },
  },
  plugins: [],
};
