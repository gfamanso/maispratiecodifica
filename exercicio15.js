// importar a biblioteca prompt-sync para capturar a entrada do usuário no terminal do Node.js
const prompt = require("prompt-sync")();


// solicitar ao usuário um número de entrada
let numero1 = Number(prompt("Digite o primeiro número inteiro para a sequência de Fibonacci: "));
let numero2 = Number(prompt("Digite o segundo número inteiro para a sequência de Fibonacci: "));


//exibe os dois primeiros números escolhidos pelo usuário
console.log (`O 1º número da sequência de Fibonacci é: ${numero1}`)
console.log (`O 2º número da sequência de Fibonacci é: ${numero2}`)

// calculando Fibonacci

for (let i = 2; i <= 10; i++) {
    let proximo = numero1 + numero2;
    console.log(`O ${i + 1}º número da sequêncida de Fibonacci é: ${proximo}`);
    numero1 = numero2;
    numero2 = proximo;
    
}