const menuBtn = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const mobileHeader = document.getElementById("nav-mobile-header");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");

  if (isOpen) {
    mobileHeader.style.boxShadow = "none";
  }
  else {
    mobileHeader.style.boxShadow = "0 2px 1.5rem 0px rgba(0, 0, 0, 0.1)";
  }
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");

  mobileHeader.style.boxShadow = "0 2px 1.5rem 0px rgba(0, 0, 0, 0.1)";
});
