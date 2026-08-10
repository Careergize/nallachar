export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: "#FEFCF7",
          100: "#FBF5E9",
          200: "#F6EAD1",
        },
        maroon: {
          50: "#FBEDEA",
          100: "#F0CEC5",
          400: "#9C3B2A",
          600: "#7A2A1D",
          700: "#6E1F17",
          800: "#571910",
          900: "#3D110B",
          950: "#280B07",
        },
        brass: {
          100: "#F1E3C3",
          300: "#D6B570",
          500: "#B08A3E",
          600: "#96702F",
          700: "#785723",
        },
        turmeric: {
          100: "#FBEACB",
          300: "#EEC26B",
          500: "#D9A441",
          600: "#C98A1B",
          700: "#A66C14",
        },
        leaf: {
          500: "#5A7145",
          600: "#45592F",
          700: "#374923",
        },
        chilli: {
          500: "#C1452F",
          600: "#A63A2B",
          700: "#8A2E21",
        },
        ink: "#2A1810",
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 20px 45px -20px rgba(62, 21, 12, 0.35)",
        lift: "0 28px 60px -24px rgba(62, 21, 12, 0.45)",
      },
      backgroundImage: {
        "kasavu-line":
          "repeating-linear-gradient(90deg, #C98A1B 0px, #C98A1B 10px, transparent 10px, transparent 20px)",
      },
    },
  },
  plugins: [],
};