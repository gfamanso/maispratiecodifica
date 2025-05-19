// importar a biblioteca prompt-sync para capturar a entrada do usuário no terminal do Node.js
const prompt = require("prompt-sync")();

// solicitar quantidade de maças compradas
let quantidade = Number(prompt("Digite a quantidade de maçãs compradas: "));


// definir o Preço por Unidade
let precoPorUnidade;

if (quantidade < 12) {
    precoPorUnidade = 0.30;
} else {
    precoPorUnidade = 0.25;
}

let total = quantidade * precoPorUnidade;
console.log(`Você comprou ${quantidade} maçãs. O valor total é R$ ${total.toFixed(2)}.`);