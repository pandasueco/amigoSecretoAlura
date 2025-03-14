//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []; // Array para armazenar os nomes

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // Remove espaços extras

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = ""; // Limpa o campo de input
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar
    
    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio.");
        return;
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpa a lista anterior

    let sorteio = [...amigos]; // Cópia do array
    let embaralhado = [];
    
    while (sorteio.length > 0) {
        let indice = Math.floor(Math.random() * sorteio.length);
        let sorteado = sorteio.splice(indice, 1)[0];
        embaralhado.push(sorteado);
    }
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        let amigo = amigos[i];
        let amigoSecreto = embaralhado[i];

        // Evita que a pessoa tire a si mesma
        if (amigo === amigoSecreto) {
            sortearAmigo();
            return;
        }

        li.textContent = `${amigo} → ${amigoSecreto}`;
        resultado.appendChild(li);
    }
}
