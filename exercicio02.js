//Importando a biblioteca prompt-sync para receber entradas do usuário
const prompt = require('prompt-sync')();

//solicitar o nome e a idade da pessoa
let nome = prompt("Digite seu nome: ").trim();
let idade = Number(prompt("Digite sua idade: ").trim());


// Com base no Estatuto da Criança e do Adolescente, as classificações são:

// Criança: 0 a 11 anos 

// Adolescente: 12 a 17 anos 

// Adulto: 18 a 59 anos 

// Idoso: 60 anos ou mais

if (idade < 0) {
    console.log("Idade inválida. Por favor, insira um valor positivo.");
} else if (idade < 12) {
    console.log(`${nome}, de acordo com as classificações do Estatuto da Criança e do Adolescente, você é "Criança".`);
} else if (idade < 18) {
    console.log(`${nome}, de acordo com as classificações do Estatuto da Criança e do Adolescente, você é "Adolescente".`);
} else if (idade < 60) {
    console.log(`${nome}, de acordo com as classificações etárias, você é "Adulto".`);
} else {
    console.log(`${nome}, de acordo com as classificações do Estatuto da Pessoa Idosa, você é "Idoso".`);
}