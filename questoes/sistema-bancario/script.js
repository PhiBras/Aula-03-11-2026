const $ = id => document.getElementById(id);

$("bt").addEventListener("click",()=>{const v=parseFloat($("v").value),s=parseFloat($("sd").textContent),m=$("m");
if(!(v>0)){m.className="err";m.textContent="Informe um valor válido.";return}
if(!confirm(`Confirmar transferência de R$ ${v.toFixed(2)}?`)){m.className="err";m.textContent="Operação cancelada.";return}
if(s-v<100){m.className="err";m.textContent="Erro: saldo mínimo de R$ 100,00 não pode ser violado.";return}
$("sd").textContent=(s-v).toFixed(2);m.className="ok";m.textContent="Transferência realizada com sucesso!";window.salvarResultado("sistema-bancario",{transferencia:Number(v.toFixed(2)),saldo:Number($("sd").textContent)});});
