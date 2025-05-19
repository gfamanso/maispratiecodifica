// importar a biblioteca prompt-sync para capturar a entrada do usuário no terminal do Node.js
const prompt = require("prompt-sync")();


// solicitar ao usuário um número de entrada
let numero = Number(prompt("Digite o número desejado para exibir a tabuada: "));


// exibir resultados da tabuada
for (let i = 0; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
}