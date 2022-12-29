// Get Current Year

document.getElementById("year").innerHTML = new Date().getFullYear();

// Responsive Nav Bar
/*
 * Código funcionando no tocar, pueden generarse errores con el nav bar
 */

const navbar = document.getElementById("nav-menu");
const intro = document.getElementById("intro");
const toggler = document.getElementById("toggler-button");

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    $("#navbarExample01").collapse("hide");
    $(".fas").removeClass("fa-times");
    $(".fas").addClass("fa-bars");

    if (window.scrollY > window.innerHeight) {
      navbar.classList.add("fixed-top");
      navbar.classList.add("nav-active");
      // add padding top to show content behind navbar
      document.body.style.paddingTop = navbar.offsetHeight + "px";
    } else {
      navbar.classList.remove("fixed-top");
      navbar.classList.remove("nav-active");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});

$(document).ready(function () {
  $("#toggler-button").on("click", function () {
    $(".fas").toggleClass("fa-times");
  });
});

$("#navbarExample01").on("show.bs.collapse", function () {
  navbar.classList.add("fixed-top");
  navbar.classList.add("nav-active");
  document.body.style.paddingTop = navbar.offsetHeight + "px";
});

$("#navbarExample01").on("hidden.bs.collapse", function () {
  navbar.classList.remove("nav-active");
  if (window.scrollY > window.innerHeight) {
    navbar.classList.add("nav-active");
  }
});

window.onresize = () => {
  // Nav Bar
  $("#navbarExample01").collapse("hide");
  $(".fas").removeClass("fa-times");
  $(".fas").addClass("fa-bars");

  if (window.scrollY < window.innerHeight) {
    navbar.classList.remove("nav-active");
  } else {
    navbar.classList.add("nav-active");
  }
  intro.style.marginTop = "-" + navbar.offsetHeight + "px";

  // About Us
  if (window.innerWidth <= 1200) {
    $(".gx-5").removeClass("col-md-6");
  } else {
    $(".gx-5").addClass("col-md-6");
  }
};

window.onload = () => {
  // Nav Bar
  intro.style.marginTop = "-" + navbar.offsetHeight + "px";

  // About Us
  if (window.innerWidth <= 1200) {
    $(".gx-5").removeClass("col-md-6");
  } else {
    $(".gx-5").addClass("col-md-6");
  }
};
