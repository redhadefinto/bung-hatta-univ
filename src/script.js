const burger = document.getElementById('burger')
const navActive = document.getElementById('nav-active')
// import Aos from 'aos'

burger.addEventListener('click', () => {
  navActive.classList.toggle('right-[-300%]');
});

let acc = document.getElementsByClassName("accordion");
let i;
let len = acc.length;
for (i = 0; i < len; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

const logo = document.getElementById('logo')

// const navTentang = document.getElementById('nav-tentang')
// const tentang = document.getElementById('tentang')
// tentang.scrollIntoView({
//   block: 'start',
//   behavior: "smooth",
//   inline: "end"
// })

// init()



