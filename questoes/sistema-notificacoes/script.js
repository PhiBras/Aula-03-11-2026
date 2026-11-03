const $ = id => document.getElementById(id);

$("ic").addEventListener("mouseover",()=>{$("nt").style.display="block";window.salvarResultado("sistema-notificacoes",{notificacoesVisualizadas:true});});$("ic").addEventListener("mouseout",()=>$("nt").style.display="none");
