const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");

// 🔹 Ao carregar a página, verifica se existe tema salvo
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  rootHtml.setAttribute("data-theme", savedTheme);

  // Ajusta o ícone de acordo com o tema salvo
  if (savedTheme === "light") {
    toggleTheme.classList.add("bi-sun");
    toggleTheme.classList.remove("bi-moon-stars");
  } else {
    toggleTheme.classList.add("bi-moon-stars");
    toggleTheme.classList.remove("bi-sun");
  }
}

function changeTheme() {
  const currentTheme = rootHtml.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  // muda no HTML
  rootHtml.setAttribute("data-theme", newTheme);

  // salva no localStorage
  localStorage.setItem("theme", newTheme);

  // troca ícone
  toggleTheme.classList.toggle("bi-sun");
  toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);

// Accordion
accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    accordionItem.classList.toggle("active");
  });
});

// Menu links
menuLinks.forEach(item => {
  item.addEventListener("click", () => {
    menuLinks.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});
