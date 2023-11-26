/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#DCAF52",
          50: "#E7E2B3",
          100: "#E3DCA7",
          200: "#DCCF90",
          300: "#D5C079",
          400: "#CDB061",
          500: "#C69E4A",
          600: "#BB8B3B",
          700: "#A87735",
          800: "#95642F",
          900: "#815229",
          950: "#784A26",
        }, // Add your custom color here
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
