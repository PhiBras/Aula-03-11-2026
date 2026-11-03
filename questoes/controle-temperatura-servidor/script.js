const $ = id => document.getElementById(id);

$("t").addEventListener("keyup",()=>{const v=parseFloat($("t").value),b=$("demo");
if(isNaN(v)){b.style.background="#fff";return}
b.style.background=v<40?"#86efac":v<=70?"#fde047":"#f87171";const estado=v<40?"Normal":v<=70?"Atenção":"Crítico";$("m").textContent=estado;window.salvarResultado("controle-temperatura-servidor",{temperatura:v,estado});});
