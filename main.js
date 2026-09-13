// Mobile nav toggle
const toggle = document.querySelector(".nav__toggle");
const links = document.querySelector(".nav__links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("nav__links--open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}
