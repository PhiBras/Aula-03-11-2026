const $ = id => document.getElementById(id);

const msg=["Péssimo","Ruim","Regular","Bom","Excelente"];
for(let i=1;i<=5;i++){const s=document.createElement("span");s.className="star";s.textContent="★";$("st").appendChild(s);
s.addEventListener("click",()=>{[...$("st").children].forEach((x,j)=>x.classList.toggle("on",j<i));$("m").textContent=`Nota: ${i}/5 – ${msg[i-1]}`;window.salvarResultado("sistema-avaliacao",{nota:i,avaliacao:msg[i-1]});});}
