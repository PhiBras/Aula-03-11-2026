const $ = id => document.getElementById(id);

const a=$("au");a.volume=.5;$("pl").addEventListener("click",()=>{a.play();window.salvarResultado("painel-controle-musica",{reproducao:"play",volume:a.volume});});$("pa").addEventListener("click",()=>{a.pause();window.salvarResultado("painel-controle-musica",{reproducao:"pause",volume:a.volume});});$("vl").addEventListener("input",e=>{a.volume=e.target.value;window.salvarResultado("painel-controle-musica",{reproducao:a.paused?"pause":"play",volume:a.volume});});
