const burger = document.getElementById("burger");
const navActive = document.getElementById("nav-active");

burger.addEventListener("click", () => {
  navActive.classList.toggle("right-[-300%]");
});
