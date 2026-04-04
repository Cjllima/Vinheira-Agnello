let nomeVinho;
let tipo;
let safra;
let quantidade;
let validacao = prompt("Gostaria de cadastrar um vinho? \n1.Sim\n2.Não");
validacao = validacao ? validacao.toLowerCase() : "";

if (validacao === "sim" || validacao === "1") {
    while (true) {
        nomeVinho = prompt("Digite o nome do vinho");

        if (nomeVinho === null || !nomeVinho.trim()) {
            alert("O nome do vinho é obrigatório");
        } else {
            break;
        };
    };

    while (true) {
        tipo = prompt("Digite o tipo do vinho");

        if (tipo === null || !tipo.trim()) {
            alert("O tipo do vinho é obrigatório");
        } else {
            break;
        };
    };

    while (true) {
        safra = prompt("Digite o ano do vinho");
        const ano = Number(safra);

        if (safra === null || !Number.isInteger(ano)) {
            alert("A safra do vinho é obrigatória");
        } else if (ano < 1000) {
            alert("O ano deve ter 4 dígitos");
        } else {
            break;
        };
    };

    while (true) {
        quantidade = prompt("Digite a quantidade em estoque do vinho");
        const qtdd = Number(quantidade);

        if (quantidade === null || !Number.isInteger(qtdd)) {
            alert("A quantidade do vinho é obrigatória");
        } else if (qtdd <= 0) {
            alert("A quantidade não pode ser menor ou igual a zero");
        } else {
            break;
        };
    };
    
    alert("Cadastro realizado! Veja os detalhes no console.");

    console.log(`
====== DADOS DOS VINHOS ======
Nome do vinho: ${nomeVinho}
Tipo do vinho: ${tipo}
Safra: ${safra}
Quantidade em estoque: ${quantidade}
==============================
`);

} else {
    alert("Cadastro finalizado");
};