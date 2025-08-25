// Objetivo: crie um programa em JavaScript chamado calculo_conceito.js. Este programa deverá:
// Receber a nota de um aluno (de 0 a 100); Usar estruturas condicionais para determinar os conceitos A, B, C, D e F; e se foram aprovados, reprovados ou estão de recuperação.
// Além disso, o programa deve informar quantos pontos faltaram para o próximo conceito, caso o aluno não tenha alcançado a nota máxima (A).
prompt = require('prompt-sync')();

let nota = parseFloat(prompt("Digite a nota do aluno (0-100): ")); 
let travesao = "---------------------------------";

console.log(travesao);

if (nota >= 90) // avalia a nota e imprime o conceito
    console.log("Você recebeu a nota A - Aprovado");
else if (nota >= 80)    
    console.log("Você recebeu a nota B - Aprovado");
else if (nota >= 70)
    console.log("Você recebeu a nota C - Aprovado");
else if (nota >= 60)
    console.log("Você recebeu a nota D - Recuperação");
else if (nota < 60)
    console.log("Você recebeu a nota F - Reprovado");
else
    console.log("Nota inválida. Por favor, insira uma nota entre 0 e 100.");

let proximoConceito; // calcula quantos pontos faltam para o próximo conceito
if (nota < 60) {
    proximoConceito = 60;
}
else if (nota < 70) {
    proximoConceito = 70;
}
else if (nota < 80) {
    proximoConceito = 80;
}
else if (nota < 90) {
    proximoConceito = 90;
} 

console.log(`Faltaram ${proximoConceito - nota} ponto(s) para o próximo conceito.`);