
/* Atualiza o ano automaticamente no rodapé */
const ano = document.getElementById("ano");

if (ano) {
    ano.textContent = new Date().getFullYear();
}

/* Mensagem no console para verificar se o JavaScript carregou */
console.log("Portfólio da Anna carregado com sucesso!");
