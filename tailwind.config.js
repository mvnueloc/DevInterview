/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1A",
        secundary: "#3168CB",
      },
      backgroundImage: {
        "custom-degrad":
          "linear-gradient(90.21deg, #1A1A1A -5.91%, #232323 111.58%)",
      },
      fontFamily: {
        jetbrains: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
