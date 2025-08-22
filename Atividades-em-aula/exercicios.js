// Conversão de Temperatura Declare uma variável celsius com um valor de temperatura em graus Celsius. Converta a temperatura para Fahrenheit usando a fórmula: F = (C * 9/5) + 32. Imprima o resultado.
const prompt = require("prompt-sync")();

let celsius = parseFloat(prompt("Digite a temperatura em graus Celsius: "));
let fahrenheit = (celsius * 9/5) + 32; 
console.log(`Temperatura em Fahrenheit: ${fahrenheit.toFixed(2)}°F`);

// Verificação de Números Pares e Ímpares Declare uma variável numero com um valor inteiro. Use estruturas condicionais para verificar se o número é par ou ímpar e imprima o resultado.    
let numero = parseInt(prompt("Digite um número inteiro: "));
if (numero % 2 === 0) {
    console.log(`${numero} é um número par.`);
}
else {
    console.log(`${numero} é um número ímpar.`);
}

// "2. Soma dos Números Pares em um Intervalo:\n", "Peça ao usuário dois números, representando o início e o fim de um intervalo. Use um loop (for ou while) para calcular a soma de todos os números pares nesse intervalo e exiba o resultado.
let inicio = parseInt(prompt("Digite o início do intervalo: "));
let fim = parseInt(prompt("Digite o fim do intervalo: "));
let somaPares = 0;
    let atual = inicio;
while (atual <= fim) {
    if (atual % 2 === 0) {
        somaPares += atual;
    }
    atual++;
}
console.log(`A soma dos números pares entre ${inicio} e ${fim} é: ${somaPares}`);
// ...existing code...

// Peça ao usuário uma palavra ou frase. Verifique se a entrada é um palíndromo (ou seja, se pode ser lida da mesma forma de trás para frente, ignorando espaços e maiúsculas/minúsculas). Exiba "É palíndromo" ou "Não é palíndromo".
let entrada = prompt("Digite uma palavra ou frase: ").replace(/\s+/g, '').toLowerCase();
let textoInvertido = entrada.split('').reverse().join('');
if (textoInvertido === entrada) {
    console.log("É palíndromo");
}
else {
    console.log("Não é palíndromo");
}