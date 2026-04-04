let nomeVinho;
let tipo;
let safra;
let quantidade;

while (true) {
    nomeVinho = prompt("Digite o nome do vinho");

    if (nomeVinho === null || !nomeVinho.trim()) {
        alert("O nome do vinho é obrigatorio");
    } else {
        break;
    };
};

while (true) {
    tipo = prompt("Digite o tipo do vinho");

    if (tipo === null || !tipo.trim()) {
        alert("O tipo do vinho é obrigatorio");
    } else {
        break;
    };
};

while (true) {
    safra = prompt("Digite o ano do vinho");
    const ano = Number(safra);

    if (safra === null || !Number.isInteger(ano) || ano <= 0) {
        alert("A safra do vinho é obrigatorio");
    } else {
        break;
    };
};

while (true) {
    quantidade = prompt("Digite a quantidade em estoque do vinho");
    const qtdd = Number(quantidade);

    if (quantidade === null || !Number.isInteger(qtdd)) {
        alert("A quantidade do vinho é obrigatorio");
    } else if (qtdd <= 0) {
        alert("A quantidade não pode ser menor ou igual a zero")
    }else {
        break;
    };
};

console.log(`
====== DADOS DOS VINHOS ======
    Nome do vinho: ${nomeVinho}
    Tipo do vinho: ${tipo}
    Sua safra: ${safra}
    Quantidade em estoque: ${quantidade}
=============================
`);