const $ = id => document.getElementById(id);

$("q").addEventListener("input",()=>{const v=$("q").value,m=$("m");
if(v===""){m.textContent="";return}
if(+v<10){m.className="err";m.textContent="⚠️ Estoque baixo! Reponha o produto.";}else{m.className="ok";m.textContent="Estoque adequado.";}window.salvarResultado("controle-estoque",{quantidade:Number(v),estoqueBaixo:+v<10});});
