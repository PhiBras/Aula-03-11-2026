const themeStorageKey = "atividade-fixacao-theme";
const temaSalvo = localStorage.getItem(themeStorageKey);
if (temaSalvo === "light" || temaSalvo === "dark") {
  document.body.dataset.theme = temaSalvo;
}

window.addEventListener("message", event => {
  if (event.origin !== location.origin || event.source !== window.parent) return;
  if (event.data?.type !== "atividade-fixacao-theme") return;
  if (event.data.theme !== "light" && event.data.theme !== "dark") return;
  document.body.dataset.theme = event.data.theme;
});
