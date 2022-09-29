/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      navbg: "#202877",
      primaryText: "#ffffff",
      blue: "#007bff",
      indigo: "#6610f2",
      purple: "#6f42c1",
      pink: "#e83e8c",
      red: "#dc3545",
      orange: "#fd7e14",
      yellow: "#ffc107",
      green: "#28a745",
      teal: "#20c997",
      cyan: "#17a2b8",
      white: "#fff",
      gray: "#6c757d",
      grayDark: "#343a40",
      primary: "#007bff",
      secondary: "#6c757d",
      success: "#28a745",
      info: "#17a2b8",
      warning: "#ffc107",
      danger: "#dc3545",
      light: "#f8f9fa",
      dark: "#343a40",
    },
    extend: {
      padding: {
        navx: "10rem",
        navxx: "15rem",
      },
      backgroundImage: {
        heroImage: "url('./src/Assets/images/hero-bg-1.jpg')",
      },
      fontWeight: {
     thick: "2rem",
      },
    },
  },
  plugins: [],
};
