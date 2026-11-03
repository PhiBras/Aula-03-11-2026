const $ = id => document.getElementById(id);

$("bt").addEventListener("click",()=>{const b=$("demo"),d=b.dataset.d!=="1";b.dataset.d=d?"1":"0";
b.style.background=d?"#111827":"#fff";b.style.color=d?"#f9fafb":"#111";
$("bt").style.background=d?"#f9fafb":"#3b82f6";$("bt").style.color=d?"#111":"#fff";$("bt").textContent=d?"Modo Claro":"Modo Escuro";window.salvarResultado("modo-escuro",{ativado:d});});
