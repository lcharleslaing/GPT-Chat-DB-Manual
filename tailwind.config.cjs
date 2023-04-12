const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
};

module.exports = config;
