(() => {
  const resultElement = document.createElement("p");
  resultElement.setAttribute("role", "status");
  resultElement.style.cssText = "margin-top:12px;font-size:13px";
  document.getElementById("demo")?.append(resultElement);

  let pendingSave;

  window.salvarResultado = (questionId, result) => {
    clearTimeout(pendingSave);
    resultElement.textContent = "Salvando no Supabase...";
    pendingSave = setTimeout(async () => {
      try {
        const { error } = await window.supabaseClient
          .from("resultados_exercicios")
          .insert({ question_id: questionId, resultado: result });
        if (error) throw error;
        resultElement.textContent = "Resultado salvo no Supabase.";
      } catch (error) {
        resultElement.textContent = `Erro ao salvar: ${error.message}`;
        console.error("Erro ao salvar resultado no Supabase:", error);
      }
    }, 500);
  };
})();
