const burger = document.getElementById("burger");
const navActive = document.getElementById("nav-active");

burger.addEventListener("click", () => {
  navActive.classList.toggle("right-[-300%]");
});

const dbAlumni = document.getElementById('db-alumni')


const scriptURL =
  "https://script.google.com/macros/s/AKfycbzsDumKwNZ_vD89sLYpUepgX-SvCGNwAhB_9DA1sjHPyLHG4MaA0JsSj35Bkh98GITx/exec";
const form = document.forms["db-alumni"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});