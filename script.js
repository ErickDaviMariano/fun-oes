const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual piloto tem o maior número de campeonatos mundiais na Fórmula 1?",
        alternativas: [
            "Lewis Hamilton",
            "Michael Schumacher",
            "Juan Manuel Fangio"
        ]
    },
    {
        enunciado: "Qual equipe tem o maior número de títulos de construtores?",
        alternativas: [
            "Mercedes",
            "Ferrari",
            "Red Bull Racing"
        ]
    },
    {
        enunciado: "Em qual circuito se realiza o Grande Prêmio de Mônaco?",
        alternativas: [
            "Circuito de Spa-Francorchamps",
            "Circuito de Silverstone",
            "Circuito de Monte Carlo"
        ]
    },
    {
        enunciado: "Qual é o nome do sistema de recuperação de energia utilizado pela Fórmula 1 desde 2009?",
        alternativas: [
            "KERS",
            "DRS",
            "ERS"
        ]
    },
    {
        enunciado: "Quem foi o campeão da temporada de Fórmula 1 de 2021?",
        alternativas: [
            "Max Verstappen",
            "Lewis Hamilton",
            "Charles Leclerc"
        ]
    }
];

let atual = 0;
let respostas = [];

function mostraPergunta() {
    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = '';

    perguntaAtual.alternativas.forEach((alternativa, index) => {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        botaoAlternativa.addEventListener("click", () => selecionarResposta(index));
        caixaAlternativas.appendChild(botaoAlternativa);
    });

    atualizarNavegacao();
}

function selecionarResposta(index) {
    respostas[atual] = index; // Armazena a resposta selecionada
    if (atual < perguntas.length - 1) {
        atual++;
        mostraPergunta();
    } else {
        mostraResultado();
    }
}

function atualizarNavegacao() {
    document.getElementById("btn-anterior").style.display = atual === 0 ? 'none' : 'inline';
    document.getElementById("btn-proximo").
