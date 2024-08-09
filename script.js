// Seleciona os botões e os conteúdos das abas relacionados à inteligência artificial
const botoesIA = document.querySelectorAll(".botao-ia");
const textosIA = document.querySelectorAll(".aba-conteudo-ia");

// Adiciona a funcionalidade de troca de abas com base no tema IA
for (let i = 0; i < botoesIA.length; i++) {
    botoesIA[i].onclick = function () {
        for (let j = 0; j < botoesIA.length; j++) {
            botoesIA[j].classList.remove("ativo");
            textosIA[j].classList.remove("ativo");
        }

        botoesIA[i].classList.add("ativo");
        textosIA[i].classList.add("ativo");
    }
}

// Seleciona os contadores e define datas importantes relacionadas à IA
const contadoresIA = document.querySelectorAll(".contador-ia");
const tempoObjetivoIA1 = new Date("2024-01-01T00:00:00"); // Data para um avanço significativo em IA
const tempoObjetivoIA2 = new Date("2024-06-01T00:00:00"); // Data para um marco importante na IA
const tempoObjetivoIA3 = new Date("2024-12-01T00:00:00"); // Data para um evento internacional sobre IA
const tempoObjetivoIA4 = new Date("2025-01-01T00:00:00"); // Data para uma nova tecnologia IA revolucionária

const temposIA = [tempoObjetivoIA1, tempoObjetivoIA2, tempoObjetivoIA3, tempoObjetivoIA4];

// Calcula o tempo restante para cada objetivo relacionado à IA
function calculaTempoIA(tempoObjetivo) {
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

// Atualiza o cronômetro para refletir o tempo restante até os objetivos de IA
function atualizaCronometroIA() {
    for (let i = 0; i < contadoresIA.length; i++) {
        document.getElementById("diasIA" + i).textContent = calculaTempoIA(temposIA[i])[0];
        document.getElementById("horasIA" + i).textContent = calculaTempoIA(temposIA[i])[1];
        document.getElementById("minIA" + i).textContent = calculaTempoIA(temposIA[i])[2];
        document.getElementById("segIA" + i).textContent = calculaTempoIA(temposIA[i])[3];
    }
}

// Inicia o cronômetro para os eventos de IA
function comecaCronometroIA() {
    atualizaCronometroIA();
    setInterval(atualizaCronometroIA, 1000);
}

comecaCronometroIA();
