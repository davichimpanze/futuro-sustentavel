// Futuro Sustentável - controle de navegação entre seções

function mostrarSecao(secaoId) {
    // Seleciona todas as seções da página
    const secoes = document.querySelectorAll("main section");

    // Esconde todas as seções
    secoes.forEach(secao => {
        secao.classList.add("escondido");
    });

    // Mostra apenas a seção escolhida
    const secaoAtiva = document.getElementById(secaoId);
    if (secaoAtiva) {
        secaoAtiva.classList.remove("escondido");
    }
}
