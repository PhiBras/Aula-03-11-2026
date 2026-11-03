const $ = id => document.getElementById(id);
const form = $("f");
const mensagem = $("m");

$("f").addEventListener("submit", async event => {
  event.preventDefault();
  mensagem.className = "";
  mensagem.textContent = "Verificando os dados...";

  try {
    const { error } = await window.supabaseClient.auth.signInWithPassword({
      email: $("u").value.trim(),
      password: $("s").value
    });
    if (error) throw error;

    mensagem.className = "ok";
    mensagem.textContent = "Login realizado com sucesso!";
    window.salvarResultado("sistema-login-academico", { status: "login realizado" });
  } catch (error) {
    mensagem.className = "err";
    mensagem.textContent = `Não foi possível entrar: ${error.message}`;
  }
});

$("cadastro").addEventListener("click", async () => {
  if (!form.reportValidity()) return;
  mensagem.className = "";
  mensagem.textContent = "Criando conta...";

  try {
    const { data, error } = await window.supabaseClient.auth.signUp({
      email: $("u").value.trim(),
      password: $("s").value
    });
    if (error) throw error;

    mensagem.className = "ok";
    mensagem.textContent = data.session
      ? "Conta criada e login realizado!"
      : "Conta criada. Desative a confirmação de e-mail nas configurações do Supabase para entrar sem confirmar.";
  } catch (error) {
    mensagem.className = "err";
    mensagem.textContent = `Não foi possível criar a conta: ${error.message}`;
  }
});
