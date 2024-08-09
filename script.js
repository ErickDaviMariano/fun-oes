document.addEventListener("DOMContentLoaded", () => {
    const pilotos = [
        { nome: "Lewis Hamilton", equipe: "Mercedes" },
        { nome: "Max Verstappen", equipe: "Red Bull Racing" },
        { nome: "Charles Leclerc", equipe: "Ferrari" }
    ];

    const equipes = [
        { nome: "Mercedes", pais: "Alemanha" },
        { nome: "Red Bull Racing", pais: "Áustria" },
        { nome: "Ferrari", pais: "Itália" }
    ];

    const listaPilotos = document.getElementById("lista-pilotos");
    const listaEquipes = document.getElementById("lista-equipes");

    pilotos.forEach(piloto => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `<h3>${piloto.nome}</h3><p>Equipe: ${piloto.equipe}</p>`;
        listaPilotos.appendChild(div);
    });

    equipes.forEach(equipe => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `<h3>${equipe.nome}</h3><p>País: ${equipe.pais}</p>`;
        listaEquipes.appendChild(div);
    });
});
