const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você descobre uma nova tecnologia de IA aplicada na medicina que pode prever doenças com base em dados genéticos. Qual é a sua reação inicial?",
        alternativas: [
            {
                texto: "Isso é preocupante!",
                afirmacao: "Você se preocupa com a privacidade e o potencial uso indevido dos dados genéticos."
            },
            {
                texto: "Isso é incrível!",
                afirmacao: "Você fica empolgado com as possibilidades de diagnósticos mais precisos e tratamentos personalizados."
            }
        ]
    },
    {
        enunciado: "Um hospital implementou um sistema de IA para monitorar pacientes em tempo real. Qual seria sua opinião sobre isso?",
        alternativas: [
            {
                texto: "Acho que é uma grande melhoria, pois pode oferecer cuidados mais rápidos e precisos.",
                afirmacao: "Você acredita que a IA pode melhorar significativamente o atendimento ao paciente e a eficiência hospitalar."
            },
            {
                texto: "Estou preocupado com o fato de que isso possa reduzir o contato humano e afetar a qualidade do atendimento.",
                afirmacao: "Sua preocupação leva você a se engajar em discussões sobre como equilibrar a tecnologia com o cuidado humano."
            }
        ]
    },
    {
        enunciado: "Em uma aula sobre IA na medicina, você deve apresentar um trabalho sobre as implicações éticas do uso de IA na saúde. Como você procede?",
        alternativas: [
            {
                texto: "Pesquiso sobre as implicações éticas e escrevo um trabalho detalhado utilizando ferramentas de IA para obter dados relevantes.",
                afirmacao: "Você utilizou a IA para obter uma visão aprofundada e criar um trabalho bem fundamentado sobre ética na saúde."
            },
            {
                texto: "Baseio meu trabalho em discussões com colegas e pesquisas tradicionais, sem usar ferramentas de IA diretamente.",
                afirmacao: "Você prefere um enfoque m
