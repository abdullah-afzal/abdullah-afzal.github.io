// ===== script.js =====

// Theme toggle button
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const rootElement = document.documentElement;

// Load theme from localStorage
const currentTheme = localStorage.getItem("theme") || "dark";
rootElement.setAttribute("data-theme", currentTheme);
themeIcon.classList.add(currentTheme === "dark" ? "fa-moon" : "fa-sun");

// Scroll header hide/show
let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    header.classList.remove("show");
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
    header.classList.add("show");
  }
  lastScrollTop = scrollTop;
});

// Toggle theme mode
function toggleTheme() {
  const isLight = rootElement.getAttribute("data-theme") === "light";
  const newTheme = isLight ? "dark" : "light";
  rootElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  
  themeIcon.classList.remove("fa-sun", "fa-moon");
  themeIcon.classList.add(newTheme === "dark" ? "fa-moon" : "fa-sun");
  themeIcon.classList.add("animate-toggle");
  setTimeout(() => themeIcon.classList.remove("animate-toggle"), 300);
}

themeToggle.addEventListener("click", toggleTheme);
