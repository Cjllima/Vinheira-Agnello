let nomeVinho;
let tipo;
let safra;
let quantidade;

while (true) {
    nomeVinho = prompt("Digite o nome do vinho");
    tipo = prompt("Digite o tipo do vinho");
    safra = prompt("Digite o ano do vinho");
    quantidade = prompt("Digite a quantidade em estoque do vinho");

    if (nomeVinho === null || tipo === null || safra === null || quantidade === null) {
        alert("Cadastro cancelado.");
        break;
    } else if (nomeVinho.trim() && tipo.trim() && Number.isInteger(Number(safra)) && Number(quantidade) > 0) {
        alert("Cadastro realizado! Veja os detalhes no console.");
        break;
    } else {
        alert("Preencha todos os campos!");
    }
}

if (nomeVinho && tipo && safra && quantidade) {
    console.log(`
====== DADOS DO VINHOS ======
    Nome do vinho: ${nomeVinho}
    Tipo do vinho: ${tipo}
    Sua safra: ${safra}
    Quantidade em estoque: ${quantidade}
=============================
    `);
}