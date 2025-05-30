async function gerarImagem() {
  const prompt = document.getElementById("prompt").value;
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "Gerando imagem...";

  try {
    const resposta = await fetch("http://127.0.0.1:8000/gerar-imagem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await resposta.json();

    if (resposta.ok) {
      resultado.innerHTML = `<img src="${data.imagem_url}" alt="Imagem gerada" width="512"/>`;
    } else {
      resultado.innerHTML = `Erro: ${data.detail || "Erro ao gerar imagem"}`;
    }
  } catch (error) {
    resultado.innerHTML = "Erro de conexão com o backend.";
    console.error(error);
  }
}
