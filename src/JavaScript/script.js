let nomeVinho;
let tipo;
let safra;
let quantidade;

while(true) {
    nomeVinho = prompt("Digite o nome do vinho");
    tipo = prompt("Digite o tipo do vinho");
    safra = prompt("Digite o ano do vinho");
    quantidade = prompt("Digite a quantidade em estoque do vinho");

    if (nomeVinho && tipo && !isNaN(safra) && !isNaN(quantidade)) {
        break;
    } else {
        alert("Preencha todos os campos!");
    };
};

alert("Cadastro realizado! Veja os detalhes no console.");
alert("A seguir, veja os detalhes do vinho no console.");

console.log(`
====== DADOS DO VINHOS ======
    Nome do vinho: ${nomeVinho}
    Tipo do vinho: ${tipo}
    Sua safra: ${safra}
    Quantidade em estoque: ${quantidade}
=============================
`);