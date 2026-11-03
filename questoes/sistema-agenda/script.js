const $ = id => document.getElementById(id);

["08:00","09:00","10:00","11:00","14:00","15:00","16:00","17:00"].forEach(h=>{const s=document.createElement("span");s.className="slot";s.textContent=h;$("hs").appendChild(s);
s.addEventListener("click",()=>{document.querySelectorAll(".slot").forEach(x=>x.classList.remove("on"));s.classList.add("on");$("m").textContent="Horário escolhido: "+h;window.salvarResultado("sistema-agenda",{horario:h});});});
