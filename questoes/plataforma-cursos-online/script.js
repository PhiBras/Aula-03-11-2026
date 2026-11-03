const $ = id => document.getElementById(id);

document.querySelectorAll(".thumb").forEach(t=>t.addEventListener("click",()=>{
$("area").innerHTML=`<video width="100%" controls autoplay muted src="${t.dataset.v}"></video>`;window.salvarResultado("plataforma-cursos-online",{aula:t.textContent.trim()});}));
