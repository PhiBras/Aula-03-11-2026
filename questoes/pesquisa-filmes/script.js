const $ = id => document.getElementById(id);

const f=["Matrix","Interestelar","Inception","Vingadores","O Rei Leão","Titanic","Toy Story","Gladiador","Avatar","Batman"];
const r=t=>{const resultados=f.filter(x=>x.toLowerCase().includes(t.toLowerCase()));$("ls").innerHTML=resultados.map(x=>`<li>${x}</li>`).join("")||"<li>Nenhum resultado</li>";if(t)window.salvarResultado("pesquisa-filmes",{quantidadeResultados:resultados.length});};
$("b").addEventListener("input",e=>r(e.target.value));r("");
