const $ = id => document.getElementById(id);

const up=()=>{const v=+$("r").value;$("l").style.background=`hsl(48,100%,${15+v*0.55}%)`;$("l").style.boxShadow=`0 0 ${v}px hsl(48,100%,60%)`;$("m").textContent=v+"%";window.salvarResultado("luminosidade-inteligente",{luminosidade:v});};
$("r").addEventListener("input",up);up();
