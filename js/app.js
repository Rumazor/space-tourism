// === MENU ===

const navToggle = document.querySelector(".nav-toggle");
const closeAsideBtn = document.querySelector("#close-aside");
const asideMenu = document.querySelector(".aside-menu");

navToggle.addEventListener("click", () => {
  asideMenu.classList.add("show-aside");
});

closeAsideBtn.addEventListener("click", () => {
  asideMenu.classList.remove("show-aside");
});
