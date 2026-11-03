const $ = id => document.getElementById(id);

$("f").addEventListener("change",()=>{const f=$("f").files[0];$("m").textContent=f?`Arquivo: ${f.name} (${(f.size/1024).toFixed(1)} KB)`:"Nenhum arquivo selecionado";if(f)window.salvarResultado("upload-arquivos",{tamanhoBytes:f.size,tipo:f.type||"desconhecido"});});
