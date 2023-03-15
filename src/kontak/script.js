const burger = document.getElementById("burger");
const navActive = document.getElementById("nav-active");

burger.addEventListener("click", () => {
  navActive.classList.toggle("right-[-300%]");
});

const dbAlumni = document.getElementById('db-alumni')


const scriptURL =
  "https://script.google.com/macros/s/AKfycbzsDumKwNZ_vD89sLYpUepgX-SvCGNwAhB_9DA1sjHPyLHG4MaA0JsSj35Bkh98GITx/exec";
const form = document.forms["db-alumni"];
const loader = document.getElementById('loaders')
const btnSubmit = document.getElementById('btn-submit')
const alert = document.getElementById('alert')
const boxFrom = document.getElementById('box-form')

form.addEventListener("submit", (e) => {
  e.preventDefault();
  loader.classList.toggle('hidden')
  btnSubmit.classList.toggle('hidden')
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
  .then((response) => {
    console.log("Success!", response) 
  })
  .catch((error) => console.error("Error!", error.message))
  .finally(() => {
    boxFrom.innerHTML = `<div class="min-h-[400px]"></div>`
    alert.classList.toggle('hidden')
    loader.classList.toggle('hidden')
    btnSubmit.classList.toggle('hidden')
    })
});