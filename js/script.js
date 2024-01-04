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
