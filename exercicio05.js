// importar a biblioteca prompt-sync para capturar a entrada do usuário no terminal do Node.js

const prompt = require('prompt-sync')();

// solicitar ao usuário a entrada das variáveis
let peso = Number(prompt("Digite seu peso em kg: "));
let altura = Number(prompt("Digite sua altura em metros: "));

//calcular o IMC usando a fórmula:
// IMC = Peso (kg) / Altura (m)²

let imc = peso / (altura ^ 2);

// Classificando IMC: 
// Baixo peso: IMC < 18.5

// Peso normal: 18.5 <= IMC < 25

// Sobrepeso: 25 <= IMC < 30

// Obesidade: IMC >= 30

if (imc < 18.5) {
    console.log("Baixo peso");
} else if (imc >= 18 && imc < 25) {
    console.log("Peso normal");
} else if (imc>= 25 && imc < 30) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}