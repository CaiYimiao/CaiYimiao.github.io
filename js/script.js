// ===== Theme toggle (persists in localStorage) =====
(function () {
  const root = document.documentElement;
  const btn = document.getElementById("themeToggle");
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initial = saved || (prefersDark ? "dark" : "light");
  setTheme(initial);

  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
  });

  function setTheme(mode) {
    root.setAttribute("data-theme", mode);
    btn.textContent = mode === "dark" ? "☀️" : "🌙";
  }
})();

// ===== Mobile nav =====
(function () {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.addEventListener("click", (e) => {
    if (e.target.tagName === "A") links.classList.remove("open");
  });
})();

// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();
