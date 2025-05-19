// importar a biblioteca prompt-sync para capturar a entrada do usuário no terminal do Node.js
const prompt = require("prompt-sync")();



let numero = Number (prompt("Digite um número inteiro: "));


// Verifica se o número é inteiro
while (!Number.isInteger(numero)){
    console.log ("Número inválido. Por favor, digite um número inteiro.")
    numero = Number(prompt("Digite um número inteiro:"))
}


// Verifica se o número é par ou ímpar
if(numero %2 === 0){
    console.log ("O número informado é: PAR.")

} else {
        console.log ("O número informado é: ÍMPAR.")
    }