export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "progress-wave": "progress-wave 2s ease-in-out infinite",
        pulsate: "pulsate 1s ease-in-out forwards",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      keyframes: {
        "progress-wave": {
          "0%, 50%": { opacity: 1 },
          "100%": { opacity: 1 },
        },
        pulsate: {
          "0%, 100%": {
            transform: "scale(1)",
            borderColor: "#d0e0e6",
          },
          "50%": {
            transform: "scale(1.2)",
            borderColor: "#d0e0e6",
          },
        },
      },
    },
  },
  plugins: [],
};
