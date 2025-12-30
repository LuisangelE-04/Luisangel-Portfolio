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

  
  if (window.innerWidth <= 570) {
    mobileHeader.style.boxShadow = "0 2px 1.5rem 0px rgba(0, 0, 0, 0.1)";
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const cougarBtn = document.getElementById('cougarcs-btn');
  if (!cougarBtn) return;

  const tile = cougarBtn.closest('.tile');
  if (!tile) return;

  const updateLabel = () => {
    const isExpanded = tile.classList.contains('expanded') || tile.matches(':hover');
    cougarBtn.textContent = isExpanded ? 'Show Less' : 'Show More';
    cougarBtn.setAttribute('aria-expanded', isExpanded);
  };

  cougarBtn.addEventListener('click', function (event) {
    event.stopPropagation();

    // Treat "hover block" only for fine pointers (mice). Touch devices should always toggle.
    const isMouse = window.matchMedia('(pointer: fine)').matches;
    const isHovering = isMouse && tile.matches(':hover');

    if (isHovering && !tile.classList.contains('expanded')) {
      // On desktop, avoid locking the tile open while hovered.
      return;
    }

    tile.classList.toggle('expanded');
    updateLabel();
  });

  tile.addEventListener('mouseenter', updateLabel);

  tile.addEventListener('mouseleave', () => {
    if (!tile.classList.contains('expanded')) {
      updateLabel();
    }
  });

  updateLabel();
});