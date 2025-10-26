// script.js

const menuToggle = document.querySelector(".btn_menu");
const navLinks = document.querySelector(".nav_links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("active");
});