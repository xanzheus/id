const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
const container = document.querySelector(".container-besar");
const jumbo = document.querySelector(".container .jumbo");
const thumb = document.querySelectorAll(".thumb");

container.addEventListener("click", function (e) {
  if (e.target.className == "thumb") {
    jumbo.src = e.target.src;
    jumbo.classList.add("fade");
    setTimeout(function () {
      jumbo.classList.remove("fade");
    }, 500);

    thumb.forEach(function (thumb) {
      thumb.className = "thumb";
    });
    e.target.classList.add("active");
  }
});
const dark = document.querySelector(".dark input");
const tulisanProduct = document.querySelector(".isi");
dark.addEventListener("click", function () {
  document.body.classList.toggle("darkMode");
  tulisanProduct.classList.toggle("tulisanDarkMode");
});