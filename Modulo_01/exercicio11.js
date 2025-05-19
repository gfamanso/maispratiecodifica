// importar a biblioteca prompt-sync para capturar a entrada do usuário no terminal do Node.js
const prompt = require("prompt-sync")();


// solicitar ao usuário um número de entrada
let soma = 0;

for (let i = 1; i <= 5; i++) {
    let numero = Number(prompt(`Iremos calcular a soma de cinco números à sua escolha. Digite o ${i}º número: `));
    soma = soma + numero;
}

// exibir resultado da soma
console.log(`A soma total dos 5 números é: ${soma}`);