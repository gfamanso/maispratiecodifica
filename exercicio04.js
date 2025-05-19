// importar a biblioteca prompt-sync para capturar a entrada do usuário no terminal do Node.js

const prompt = require('prompt-sync')();

// apresentar o menu de sobremesa para escolha do usuário

console.log("Por gentileza, escolha uma opção de sobremesa:");
console.log("1 - Mousse de Maracujá");
console.log("2 - Pudim");
console.log("3 - Sorvete");
console.log("4 - Mousse de Morango");
console.log("5 - Petit Gateau");

// usuário digita opção de sua sobremesa
let escolha = Number(prompt("Digite o número da sua escolha: ").trim());

// confirmação da opção de sobremesa escolhida do usuário
switch (escolha) {
    case 1:
        console.log("Você escolheu Mousse de Maracujá. Por favor, aguarde. Seu pedido está em preparação.");
        break;
    case 2:
        console.log("Você escolheu Pudim. Por favor, aguarde. Seu pedido está em preparação.");
        break;
    case 3:
        console.log("Você escolheu Sorvete. Por favor, aguarde. Seu pedido está em preparação.");
        break;
    case 4:
        console.log("Você escolheu Mousse de Morango. Por favor, aguarde. Seu pedido está em preparação.");
        break;
    case 5:
        console.log("Você escolheu Petit Gateau. Por favor, aguarde. Seu pedido está em preparação.");
        break;
    default:
        console.log("Opção inválida. Por favor, escolha uma opção de 1 a 5.");
}