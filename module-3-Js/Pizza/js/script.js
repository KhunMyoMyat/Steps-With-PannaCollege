const toggle = document.querySelector("#toggle");
const navbar = document.querySelector(".navbar");

toggle.addEventListener("click", function () {
  navbar.classList.toggle("active");
  toggle.querySelector("i").classList.toggle("fa-x");
  //   if (navbar.classList.contains("active")) {
  //     navbar.classList.remove("active");
  //   } else {
  //     navbar.classList.add("active");
  //   }
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 7000,
    // nav: true, (if you want you can use but need to style it with css)
  });
});

const up = document.querySelector("#up");

window.onscroll = function () {
  if (window.scrollY > 950) {
    up.classList.add("active");
  } else {
    up.classList.remove("active");
  }
};

up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
