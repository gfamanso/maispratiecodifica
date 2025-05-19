// importar a biblioteca prompt-sync para capturar a entrada do usuário no terminal do Node.js

const prompt = require('prompt-sync')();

// solicitar o nome do aluno
let nome = prompt("Digite o nome do aluno: ").trim();

// solicitar a nota do aluno

let nota = Number(prompt("Digite a nota do aluno (0 a 10): ").trim());

// testa se a note está entre 0 a 10. Se não estiver, pede para informar a nota novamente
while (!(nota >= 0 && nota <= 10)) {
    console.log("Nota inválida. Por favor, digite uma nota entre 0 e 10.");
    nota = Number(prompt("Digite a nota do aluno (0 a 10): ").trim());
}

// classificar a nota do aluno

if (nota >= 5) {
    console.log(`${nome} está Aprovado.`);
} else if (nota >= 3) {
    console.log(`${nome} está de Recuperação.`);
} else {
    console.log(`${nome} está Reprovado.`);
}