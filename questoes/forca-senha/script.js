const $ = id => document.getElementById(id);

$("s").addEventListener("keyup",()=>{const l=$("s").value.length,m=$("m");
if(!l){m.textContent="";return}
const r=l<6?["Senha fraca","err","#b91c1c"]:l<=8?["Senha média","","#ca8a04"]:["Senha forte","ok","#15803d"];
m.textContent=r[0];m.className=r[1];m.style.color=r[2];window.salvarResultado("forca-senha",{tamanho:l,forca:r[0]});});
