// Objetivo: crie um programa em JavaScript chamado calculo_conceito.js. Este programa deverá:
// Receber a nota de um aluno (de 0 a 100); Usar estruturas condicionais para determinar os conceitos A, B, C, D e F; e se foram aprovados, reprovados ou estão de recuperação.
// Além disso, o programa deve informar quantos pontos faltaram para o próximo conceito, caso o aluno não tenha alcançado a nota máxima (A).
prompt = require('prompt-sync')();

let nota = parseFloat(prompt("Digite a nota do aluno (0-100): ")); 
let travesao = "------------------------------------------------";

console.log(travesao);

if (nota > 100 || nota < 0) // verifica se a nota é válida
    console.log("Nota inválida. Por favor, insira uma nota entre 0 e 100.");

else if (nota >= 90) // avalia a nota e imprime o conceito e qual foi a diferença para o próximo conceito
    console.log(`Você recebeu ${nota} pontos. Atingindo o conteito A e está aprovado. 
        Você está no topo!`);
else if (nota >= 80)    
    console.log(`Você recebeu ${nota} pontos. Atingindo o conteito B - Aprovado
Faltaram ${90 - nota} ponto(s) para o próximo conceito.`);
else if (nota >= 70)
    console.log(`Você recebeu ${nota} pontos. Atingindo o conteito C - Aprovado
Faltaram ${80 - nota} ponto(s) para o próximo conceito.`);
else if (nota >= 60)
    console.log(`Você recebeu ${nota} pontos. Atingindo o conteito - Recuperação
Faltaram ${70 - nota} ponto(s) para o próximo conceito.`);
else if (nota < 60)
    console.log(`Você recebeu ${nota} ponto(s). Atingindo o conteito - Reprovado
Faltaram ${60 - nota} ponto(s) para o próximo conceito.`);

console.log(travesao);