const $ = id => document.getElementById(id);

const c={"Ana":0,"Bruno":0,"Carla":0};
$("cd").innerHTML=Object.keys(c).map(n=>`<label><input type="radio" name="c" value="${n}"> ${n}</label><br>`).join("");
const r=()=>$("res").innerHTML=Object.entries(c).map(([n,v])=>`<li>${n}: <b>${v}</b> voto(s)</li>`).join("");r();
$("bt").addEventListener("click",()=>{const s=document.querySelector("input[name=c]:checked");
if(!s){$("m").className="err";$("m").textContent="Selecione um candidato.";return}
c[s.value]++;$("m").className="ok";$("m").textContent="Voto registrado!";r();window.salvarResultado("sistema-votacao",{candidato:s.value,votos:{...c}});});
