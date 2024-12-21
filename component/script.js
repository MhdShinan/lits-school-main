// script.js

// Select elements for menu interaction
export function initializeNavigation() {
  const openMenu = document.getElementById("menu");
  const closeMenu = document.getElementById("menu-close");
  const navigationMenu = document.querySelector("nav .navigation ul");

  // Open menu
  openMenu.addEventListener("click", () => {
    navigationMenu.classList.add("active");
  });

  // Close menu
  closeMenu.addEventListener("click", () => {
    navigationMenu.classList.remove("active");
  });

  // Smooth scroll for navigation links (optional)
  const navLinks = document.querySelectorAll("nav .navigation ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = e.target.getAttribute("href").slice(1); // Get the target section ID
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        e.preventDefault();
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        navigationMenu.classList.remove("active"); // Close the menu after clicking a link
      }
    });
  });
}
