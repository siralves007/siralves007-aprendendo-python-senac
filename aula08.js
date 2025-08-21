// cabeçalho    
const prompt = require("prompt-sync")();
function cabecalho() {
return ("--------------------");
}
console.log(cabecalho());

// Exercício 2: Mensagem de Boas-Vindas
function gerarMensagemBoasVindas(nome, setor) {
    return `Bem-vindo(a), ${nome}! Você foi alocado(a) ao setor de ${setor}.`;
}
console.log(gerarMensagemBoasVindas("Alves", "Tecnologia"));

// Exercício 1: Cálculo de Bônus
function calcularBonus(salario) {
    return "Seu bonus salarial é: " + (salario * 0.10);
}  
console.log(calcularBonus(10000));

// Exercício 3: tudo junto
console.log(cabecalho());
console.log(gerarMensagemBoasVindas("Ana", "Tecnologia"));
console.log(calcularBonus(5000));
console.log(cabecalho());

