const $ = id => document.getElementById(id);

let tm=[];const set=a=>{["vm","am","vd"].forEach(k=>$(k).style.background="#555");$(a[0]).style.background=a[1];window.salvarResultado("semaforo-inteligente",{luz:a[0]==="vm"?"vermelha":a[0]==="am"?"amarela":"verde"});};
const run=()=>{tm.forEach(clearTimeout);set(["vd","#22c55e"]);
tm=[setTimeout(()=>set(["am","#eab308"]),3000),setTimeout(()=>set(["vm","#ef4444"]),5000),setTimeout(run,8000)]};
$("bt").addEventListener("click",run);
