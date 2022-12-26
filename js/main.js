// Get Current Year

document.getElementById("year").innerHTML = new Date().getFullYear();

// Responsive Nav Bar

const navbar = document.getElementById("nav-menu");
const intro = document.getElementById("intro");
const toggler = document.getElementById("toggler-button");

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > window.innerHeight) {
      navbar.classList.add("fixed-top");
      navbar.classList.add("nav-active");
      // add padding top to show content behind navbar
      navbar_height = navbar.offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      navbar.classList.remove("fixed-top");
      navbar.classList.remove("nav-active");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});

/*
TODO: Corregir el error de click en el icono
*/

$(document).ready(function () {
  $(".navbar-toggler").on("click", function () {
    $(".fas").toggleClass("fa-times");
    navbar.classList.add("nav-active");
  });
});

window.onresize = () => {
  intro.style.marginTop = "-" + navbar.offsetHeight + "px";
};
