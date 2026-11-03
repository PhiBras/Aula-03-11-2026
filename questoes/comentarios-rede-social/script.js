const $ = id => document.getElementById(id);

$("c").addEventListener("input",()=>{const caracteres=$("c").value.length;$("n").textContent=200-caracteres;window.salvarResultado("comentarios-rede-social",{caracteres});});
