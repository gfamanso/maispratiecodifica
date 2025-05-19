// importar a biblioteca prompt-sync para capturar a entrada do usuário no terminal do Node.js
const prompt = require("prompt-sync")();


// solicitar ao usuário um número de entrada
let numero = Number(prompt("Digite o número desejado: "));

// verificar se o número digitado é inteiro
while (numero % 1 !== 0) {
    console.log("O valor informado não é um número inteiro. Tente novamente.");
    numero = Number(prompt("Digite um número inteiro: "));
}

for (let i = 0; i < 10; i++) {
    console.log(numero);
}