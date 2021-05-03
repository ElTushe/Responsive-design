const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const navLink = document.querySelectorAll(".nav-link");

burger.addEventListener("click", mobileMenu);
navLink.forEach(n => n. addEventListener("click", closeMenu));

function mobileMenu () {
    burger.classList.toggle("active");
    navLinks.classList.toggle("active");
}

function closeMenu () {
    burger.classList.remove("active");
    navLinks.classList.remove("active");
}