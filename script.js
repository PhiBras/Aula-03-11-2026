const botoes = [...document.querySelectorAll("aside button")];
const visualizador = document.getElementById("visualizador");

function abrir(i) {
  visualizador.src = "questoes/" + botoes[i].dataset.q + "/index.html";
  visualizador.title = botoes[i].textContent.trim();
  botoes.forEach((b, j) => b.classList.toggle("on", j === i));
  location.hash = i + 1;
}

botoes.forEach((b, i) => b.addEventListener("click", () => abrir(i)));

abrir(Math.min(Math.max((parseInt(location.hash.slice(1)) || 1) - 1, 0), botoes.length - 1));
