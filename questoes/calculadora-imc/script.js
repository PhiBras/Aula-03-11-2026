const $ = id => document.getElementById(id);

const c=()=>{const p=+$("p").value,a=+$("a").value;if(!p||!a)return;const i=p/(a*a);
const k=i<18.5?"Abaixo do peso":i<25?"Peso normal":i<30?"Sobrepeso":"Obesidade";$("m").textContent=`IMC: ${i.toFixed(1)} – ${k}`;window.salvarResultado("calculadora-imc",{imc:Number(i.toFixed(1)),classificacao:k});};
$("p").addEventListener("change",c);$("a").addEventListener("change",c);
