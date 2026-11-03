const $ = id => document.getElementById(id);

$("r").addEventListener("input",()=>{const reais=+$("r").value||0,dolares=reais/5.4;$("d").textContent=dolares.toFixed(2);window.salvarResultado("conversao-monetaria",{reais,dolares:Number(dolares.toFixed(2))});});
