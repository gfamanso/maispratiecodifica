// importar a biblioteca prompt-sync para capturar a entrada do usuário no terminal do Node.js
const prompt = require("prompt-sync")();


// solicitar ao usuário um número de entrada
let numero = Number(prompt("Digite um número inteiro para cálculo do fatorial: "));

// verificar se o número digitado é inteiro e positivo
while (numero % 1 !== 0 || numero < 0) {
    console.log("Por favor, digite um número inteiro não negativo.");
    numero = Number(prompt("Digite um número inteiro para calcular o fatorial: "));
}

// calculando o fatorial
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}

console.log(`O fatorial de ${numero} é: ${fatorial}`);