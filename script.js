const botoes = [...document.querySelectorAll("aside button[data-q]")];
const visualizador = document.getElementById("visualizador");
const themeToggle = document.getElementById("theme-toggle");
const themeStorageKey = "atividade-fixacao-theme";
let tema = localStorage.getItem(themeStorageKey) || "light";

function aplicarTema() {
  document.body.dataset.theme = tema;
  themeToggle.setAttribute("aria-label", tema === "dark" ? "Ativar tema claro" : "Ativar tema escuro");
  themeToggle.setAttribute("aria-pressed", String(tema === "dark"));
}

themeToggle.addEventListener("click", () => {
  tema = tema === "dark" ? "light" : "dark";
  localStorage.setItem(themeStorageKey, tema);
  aplicarTema();
  visualizador.contentWindow?.postMessage({ type: "atividade-fixacao-theme", theme: tema }, location.origin);
});

aplicarTema();
visualizador.addEventListener("load", () => {
  visualizador.contentWindow?.postMessage({ type: "atividade-fixacao-theme", theme: tema }, location.origin);
});

function abrir(i) {
  visualizador.src = "questoes/" + botoes[i].dataset.q + "/index.html";
  visualizador.title = botoes[i].textContent.trim();
  botoes.forEach((b, j) => b.classList.toggle("on", j === i));
  location.hash = i + 1;
}

botoes.forEach((b, i) => b.addEventListener("click", () => abrir(i)));

abrir(Math.min(Math.max((parseInt(location.hash.slice(1)) || 1) - 1, 0), botoes.length - 1));
