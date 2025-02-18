
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
  },
});

//Mobile Nav
const openIcon = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-times-circle");
const mobileNav = document.querySelector(".mobile-nav");
const mobileBg = document.querySelector(".mobile-bg");

openIcon.addEventListener("click", () => {
  mobileBg.classList.toggle("display-none");
  mobileNav.classList.remove('slide-out');
  mobileNav.classList.toggle('slide-in');
  openIcon.classList.toggle("display-none");
});

closeIcon.addEventListener("click", () => {
  setTimeout(() => {
    mobileBg.classList.toggle("display-none");
    openIcon.classList.toggle("display-none");
  }, 500);
  mobileNav.classList.remove('slide-in');
  mobileNav.classList.toggle('slide-out');
}
);