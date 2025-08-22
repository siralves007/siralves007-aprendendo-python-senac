const prompt = require("prompt-sync")();    

let boasvindas = "Olá, sou seu BOT para lembrar frases marcantes de Todo Mundo Odeia o Chris"
let frase1 = "Cara, ela tá tão nas sua - Greg";
let frase2 = "Eu não preciso disso, meu marido tem dois empregos - Rochelle";
let frase3 = "Se eu não comprar nada, o desconto é maior - Julius"; 
let frase4 = "Trágico, muito trágico - Sr. Omar";
let frase5 = "Se eu não agradecesse ao Senhor, minha mãe me mandaria";

console.log(boasvindas);
let continuar = true
while (continuar === true) {
    
   let opcao = prompt("Escolha uma frase entre 1 a 5:");
    if (opcao === "1") {
        console.log(frase1);
    } else if (opcao === "2") {
        console.log(frase2);
    } else if (opcao === "3") {
        console.log(frase3);
    } else if (opcao === "4") {
        console.log(frase4);
    } else if (opcao === "5") {
        console.log(frase5);
    } else {
        console.log("Opção inválida. Tente novamente.");
        continue;
    }
    continuar = prompt("Deseja continuar? (sim/não): ").toLowerCase() === "sim";
    if (continuar=== false) {
        console.log("Obrigado por participar!");
    }
}