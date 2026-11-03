const $ = id => document.getElementById(id);

$("q").addEventListener("input",()=>{const quantidade=Math.max(0,+$("q").value||0),total=quantidade*parseFloat($("p").textContent);$("tt").textContent=total.toFixed(2);window.salvarResultado("loja-virtual-eletronicos",{quantidade,total:Number(total.toFixed(2))});});
