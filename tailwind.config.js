/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/struktur-organisasi/index.html",
    "./src/berita/index.html",
    "./src/gallery/index.html",
    "./src/berita/index.html",
    "./src/kontak/index.html",
    "./src/visi-misi/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFF6F2",
        secondary: "#F99531",
        "box-white": "#FFF3EE",
        "box-orange": "#FF7C3A",
        grey: "#646464",
        glass: "rgba(12,12,12,0)",
      },
      fontSize: {
        "text-small": "0.7rem",
      },
      backgroundPosition: {
        hp: "background-position-x: -25.5rem;",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {},
      },
    ],
  },
};
