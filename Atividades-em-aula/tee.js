// testando novo arquivo para subir no git hub
const prompt = require("prompt-sync")();
// Início do código
let somaNota = 0;
for (let i = 0; i < 4; i++) {
    let nota = parseFloat(prompt(`Digite a nota ${i + 1}: `));
    somaNota += nota;
}
let media = somaNota / 4;
console.log("Média: " + media);
if (media >= 7) {
    console.log("Aprovado");
}else if (media >= 5) {
    console.log("Recuperação"); 
}else {
    console.log("Reprovado");
}
// Fim do código