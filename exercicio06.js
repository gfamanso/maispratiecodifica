// importar a biblioteca prompt-sync para capturar a entrada do usuário no terminal do Node.js

const prompt = require('prompt-sync')();

console.log (`Para que três lados formem um triângulo válido, 
é necessário que a soma de dois lados seja sempre maior que o terceiro lado. 
Isso precisa ser verdadeiro para todas as combinações possíveis: `);
    console.log (`1 - A + B > C`)
    console.log (`2 - A + C > B`)
    console.log (`3 - B + C > A`)
    console.log (`Se qualquer uma dessas condições não for atendida, os lados não formam um triângulo.`)

// Insira os valores dos três lados do triângulo

let A = Number(prompt("Digite o valor do lado A: "));
let B = Number(prompt("Digite o valor do lado B: "));
let C = Number(prompt("Digite o valor do lado C: "));

// verificar se todos os lados são números positivos

if (A > 0 && B > 0 && C > 0) {
    console.log("Os lados são positivos. Iremos classificar o triângulo...");
} else {
    console.log("Os lados de um triângulo devem ser números positivos. Tente novamente.");
}

// Classificação dos Triângulos:

// Equilátero: todos os três lados são iguais (A == B && B == C).

// Isósceles: dois lados são iguais e um é diferente (A == B || A == C || B == C).

// Escaleno: todos os três lados são diferentes (A != B && A != C && B != C).


if (A > 0 && B > 0 && C > 0) {
    if (A + B > C && A + C > B && B + C > A) {
        let tipoTriangulo;

        if (A === B && B === C) {
            tipoTriangulo = "Equilátero";
        } else if (A === B || A === C || B === C) {
            tipoTriangulo = "Isósceles";
        } else {
            tipoTriangulo = "Escaleno";
        }

        console.log(`Os lados formam um triângulo do tipo: ${tipoTriangulo}.`);
    }

}