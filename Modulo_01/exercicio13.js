// importar a biblioteca prompt-sync para capturar a entrada do usuário no terminal do Node.js
const prompt = require("prompt-sync")();


// solicitar ao usuário um número de entrada
let numero = Number(prompt("Digite um número decimal (0 para encerrar): "));
let soma = 0;
let contador = 0;


while (numero !== 0) {
    soma += numero;
    contador++;
    numero = Number(prompt("Digite outro número decimal (0 para encerrar): "));
}

console.log("Média aritmética dos números digitados:", soma / contador);