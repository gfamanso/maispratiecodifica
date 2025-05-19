// importar a biblioteca prompt-sync para capturar a entrada do usuário no terminal do Node.js
const prompt = require("prompt-sync")();


// solicitar ao usuário a entrada das variáveis
let valor1 = Number(prompt("Digite o primeiro valor: "));
let valor2 = Number(prompt("Digite o segundo valor: "));

// garantir que os dois valores não sejam iguais

while (valor2 === valor1) {
    console.log("Os valores não podem ser iguais. Por favor, digite um valor diferente do primeiro.");
    valor2 = Number(prompt("Digite o segundo valor novamente: "));
}

if (valor1 < valor2) {
    console.log(`Os valores em ordem crescente são: ${valor1}, ${valor2}`);
} else {
    console.log(`Os valores em ordem crescente são: ${valor2}, ${valor1}`);
}