const navbarList = document.querySelector(".navbar-list");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarList.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarList.contains(e.target)) {
    navbarList.classList.remove("active");
  }
});

const form = document.querySelector(".form");
const btnsearch = document.querySelector(".btnsearch");
const icon = document.getElementById("iconsearch");

document.querySelector("#search").onclick = () => {
  form.classList.toggle("active-form");
  if (icon.classList.contains("fa-magnifying-glass")) {
    icon.classList.remove("fa-magnifying-glass");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-magnifying-glass");
  }
};

// Animasi Scrool
document.addEventListener('DOMContentLoaded', function() {
  var animatedSection = document.querySelector('.about');
  var animatedSectionGalery = document.querySelector('.galery');

  function fadeInOnScroll() {
      var scrollPosition = window.scrollY;
      var sectionPosition = animatedSection.offsetTop;

      if (scrollPosition >= sectionPosition - window.innerHeight / 2) {
          animatedSection.style.opacity = 1;
          animatedSection.style.transform = 'translateX(0)';
      }
  }

  function fadeInOnScrollGalery() {
    var scrollPosition = window.scrollY;
    var sectionPosition = animatedSectionGalery.offsetTop;

    if (scrollPosition >= sectionPosition - window.innerHeight / 2) {
      animatedSectionGalery.style.opacity = 1;
      animatedSectionGalery.style.transform = 'translateX(0)';
    }
}

  window.addEventListener('scroll', fadeInOnScroll);
  window.addEventListener('scroll', fadeInOnScrollGalery);
  fadeInOnScroll();
  fadeInOnScrollGalery();
});
