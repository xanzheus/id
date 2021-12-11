const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

const dark = document.querySelector(".dark input");
const tulisanHero = document.querySelector(".hero");
// const tulisanAbout = document.querySelector(".konten");
dark.addEventListener("click", function () {
  document.body.classList.toggle("darkMode");
  tulisanHero.classList.toggle("tulisanDarkMode");
  // tulisanAbout.classList.toggle("tulisanDarkMode");
});
