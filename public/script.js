
const palavras = [
    "JAVASCRIPT",
    "COMPUTADOR",
    "DESENVOLVIMENTO",
    "PROGRAMA",
    "TECLADO",
    "NAVEGADOR",
    "INTERNET",
    "ALGORITMO",
    "TECNOLOGIA",
    "CLOUDFLARE",
    "HTML",
    "ESTRUTURA",
    "VARIAVEL",
    "FUNCAO",
    "CODIGO"
];

const MAX_ERROS = 6;

const elementos = {
    palavra: document.querySelector("#palavra"),
    teclado: document.querySelector("#teclado"),
    tentativas: document.querySelector("#tentativas"),
    mensagem: document.querySelector("#mensagem"),
    reiniciar: document.querySelector("#reiniciar"),
    desenho: document.querySelector("#desenho-forca")
};

let palavraSecreta = "";
let letrasEscolhidas = new Set();
let erros = 0;
let jogoFinalizado = false;

function sortearPalavra() {
    const indice = Math.floor(Math.random() * palavras.length);
    return palavras[indice];
}

function iniciarJogo() {
    palavraSecreta = sortearPalavra();
    letrasEscolhidas = new Set();
    erros = 0;
    jogoFinalizado = false;

    elementos.mensagem.textContent = "Boa sorte! Escolha uma letra.";
    elementos.mensagem.className = "";
    elementos.reiniciar.textContent = "Novo jogo";

    renderizarPalavra();
    renderizarTeclado();
    atualizarTentativas();
    desenharForca();
}

function renderizarPalavra() {
    elementos.palavra.replaceChildren();

    for (const letra of palavraSecreta) {
        const campo = document.createElement("span");
        campo.className = "letra-palavra";
        campo.textContent = letrasEscolhidas.has(letra) || jogoFinalizado
            ? letra
            : "";
        campo.setAttribute("aria-hidden", "true");
        elementos.palavra.appendChild(campo);
    }

    elementos.palavra.setAttribute(
        "aria-label",
        `Palavra: ${palavraSecreta.split("").map(letra =>
            letrasEscolhidas.has(letra) || jogoFinalizado ? letra : "oculta"
        ).join(" ")}`
    );
}

function renderizarTeclado() {
    elementos.teclado.replaceChildren();

    for (let codigo = 65; codigo <= 90; codigo++) {
        const letra = String.fromCharCode(codigo);
        const botao = document.createElement("button");

        botao.type = "button";
        botao.textContent = letra;
        botao.setAttribute("aria-label", `Escolher letra ${letra}`);
        botao.disabled = jogoFinalizado || letrasEscolhidas.has(letra);
        botao.addEventListener("click", () => escolherLetra(letra));

        elementos.teclado.appendChild(botao);
    }
}

function escolherLetra(letra) {
    if (jogoFinalizado || letrasEscolhidas.has(letra)) {
        return;
    }

    letrasEscolhidas.add(letra);

    if (!palavraSecreta.includes(letra)) {
        erros++;
    }

    verificarResultado();
    renderizarPalavra();
    renderizarTeclado();
    atualizarTentativas();
    desenharForca();
}

function verificarResultado() {
    const todasLetrasEncontradas = [...palavraSecreta]
        .every(letra => letrasEscolhidas.has(letra));

    if (todasLetrasEncontradas) {
        jogoFinalizado = true;
        elementos.mensagem.textContent = "Parabéns! Você venceu!";
        elementos.mensagem.className = "vitoria";
    } else if (erros >= MAX_ERROS) {
        jogoFinalizado = true;
        elementos.mensagem.textContent =
            `Você perdeu! A palavra era ${palavraSecreta}.`;
        elementos.mensagem.className = "derrota";
    }

    if (jogoFinalizado) {
        renderizarTeclado();
        renderizarPalavra();
    }
}

function atualizarTentativas() {
    elementos.tentativas.textContent = `Erros: ${erros} de ${MAX_ERROS}`;
}

function desenharForca() {
    elementos.desenho.replaceChildren();

    const partes = [
        { tag: "div", classe: "forca-base" },
        { tag: "div", classe: "forca-poste" },
        { tag: "div", classe: "forca-topo" },
        { tag: "div", classe: "forca-corda" },
        { tag: "div", classe: "forca-cabeca" },
        { tag: "div", classe: "forca-corpo" },
        { tag: "div", classe: "forca-braco-esquerdo" },
        { tag: "div", classe: "forca-braco-direito" },
        { tag: "div", classe: "forca-perna-esquerda" },
        { tag: "div", classe: "forca-perna-direita" }
    ];

    const quantidadeVisivel = Math.min(erros + 4, partes.length);

    for (let i = 0; i < quantidadeVisivel; i++) {
        const parte = document.createElement("div");
        parte.className = partes[i].classe;
        elementos.desenho.appendChild(parte);
    }

    elementos.desenho.setAttribute(
        "aria-label",
        `Desenho da forca: ${erros} erros`
    );
}

elementos.reiniciar.addEventListener("click", iniciarJogo);

document.addEventListener("keydown", evento => {
    const letra = evento.key.toUpperCase();

    if (/^[A-Z]$/.test(letra)) {
        escolherLetra(letra);
    }
});

iniciarJogo();
