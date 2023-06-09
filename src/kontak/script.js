const burger = document.getElementById("burger");
const navActive = document.getElementById("nav-active");

burger.addEventListener("click", () => {
  navActive.classList.toggle("right-[-300%]");
});


// const btnSubmit = document.getElementById('btn-submit')

// const validator = require("email-validator");

const name = document.getElementById('name')
const email = document.getElementById('email')
const alumni = document.getElementById('alumni')
const phone = document.getElementById('phone')
const pekerjaan = document.getElementById('pekerjaan')
const pesan = document.getElementById('pesan')

const errorName = document.getElementById('error-name')
const errorEmail = document.getElementById('error-email')
const errorAlumni= document.getElementById('error-alumni')
const errorPhone = document.getElementById('error-phone')
const errorPekerjaan = document.getElementById('error-pekerjaan')
const errorPesan = document.getElementById('error-pesan')

const dbAlumni = document.getElementById("db-alumni");

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzsDumKwNZ_vD89sLYpUepgX-SvCGNwAhB_9DA1sjHPyLHG4MaA0JsSj35Bkh98GITx/exec";
const form = document.forms["db-alumni"];
const loader = document.getElementById("loaders");
const btnSubmit = document.getElementById("btn-submit");
const boxFrom = document.getElementById("box-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  errorName.innerHTML = '';
    errorEmail.innerHTML = '';
    errorAlumni.innerHTML = '';
    errorPhone.innerHTML = '';
    errorPekerjaan.innerHTML = '';
    errorPesan.innerHTML = ''

  const emailValidate =
    /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;

  const phoneNumber =
    /\+62\s\d{3}[-\.\s]??\d{3}[-\.\s]??\d{3,4}|\(0\d{2,3}\)\s?\d+|0\d{2,3}\s?\d{6,7}|\+62\s?361\s?\d+|\+62\d+|\+62\s?(?:\d{3,}-)*\d{3,5}/;

  if (name.value === "") {
    errorName.innerHTML = '<p>Nama harus Di isi</p>'
    return;
  }
  if(email.value === "") {
    errorEmail.innerHTML = `<p>Email harus di isi</p>`
    return;
  }
  if(alumni.value === "") {
    errorAlumni.innerHTML = `<p>jurusan dan tahun Alumni harus di isi</p>`
    return;
  }
  if(phone.value === "") {
    errorPhone.innerHTML = `<p>No Handphone harus di isi</p>`
    return;
  }
  if(pekerjaan.value === "") {
    errorPekerjaan.innerHTML = `<p>Pekerjaan sekarang harus di isi</p>`
    return;
  }
  if(pesan.value === "") {
    errorPesan.innerHTML = `<p>Pesan harus di isi</p>`
    return;
  }

  if(!emailValidate.test(email.value)) {
    errorEmail.innerHTML = `<p>Email yang anda masukan salah</p>`
    return;
  }
  if(!phoneNumber.test(phone.value)) {
    errorPhone.innerHTML = `<p>No Handphone yang anda masukan salah</p>`
    return;
  }

  loader.classList.toggle("hidden");
  btnSubmit.classList.toggle("hidden");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message))
    .finally(() => {
      // boxFrom.innerHTML = `<div class="min-h-[400px]"></div>`;
      dbAlumni.innerHTML = `<div class="min-h-[400px]">
        <div class="alert bg-green-900 text-white shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Your purchase has been confirmed!</span>
          </div>
        </div>
      </div>`;
      // boxAlert.classList.toggle("hidden");
      loader.classList.toggle("hidden");
      btnSubmit.classList.toggle("hidden");
    });
});

