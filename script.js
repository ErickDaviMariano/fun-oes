// Seleção dos botões e das seções de conteúdo
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

// Adiciona a funcionalidade de aba interativa
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        // Remove a classe ativa de todos os botões e seções
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        // Adiciona a classe ativa ao botão e seção clicados
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

// Seleção dos elementos de contagem regressiva
const contadores = document.querySelectorAll(".contador");

// Definição das datas dos eventos de Fórmula 1
const eventosF1 = [
    new Date("2024-03-10T00:00:00"), // Grande Prêmio do Bahrain
    new Date("2024-03-24T00:00:00"), // Grande Prêmio da Arábia Saudita
    new Date("2024-04-07T00:00:00"), // Grande Prêmio da Austrália
    new Date("2024-05-05T00:00:00")  // Grande Prêmio da Azerbaijão
];

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    if (tempoFinal > 0) {
        return [dias, horas, minutos, segundos];
    } else {
        return [0, 0, 0, 0];
    }
}

function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        const tempoRestante = calculaTempo(eventosF1[i]);
        document.getElementById("dias" + i).textContent = tempoRestante[0];
        document.getElementById("horas" + i).textContent = tempoRestante[1];
        document.getElementById("min" + i).textContent = tempoRestante[2];
        document.getElementById("seg" + i).textContent = tempoRestante[3];
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();
