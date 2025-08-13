let a = 10;
let b = 5;
console.log("Soma>", a + b);
console.log("Subtração>", a - b);
console.log("Multiplicação>", a * b);
console.log("Divisão>", a / b);

// 

let primeiroNome = "Maria";
let segundoNome = "Silva";
let nomeCompleto = primeiroNome + " " + segundoNome;
console.log(nomeCompleto);

//

let nota = 30;
if (nota >= 60) {
    console.log("Aprovado");
}else if (nota >= 40) {
    console.log("Recuperação");
}else {
    console.log("Reprovado");
}

let diaDaSemana = 3;
switch (diaDaSemana) {
    case 1:
        console.log("Domingo");
        break;  
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
}
