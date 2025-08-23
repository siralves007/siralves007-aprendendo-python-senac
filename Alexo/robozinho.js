// Chat alexo que te dá uma frase para o personagem escolhido
const prompt = require("prompt-sync")();    

function comeco() { // função para iniciar o alexo
    return("________________________________\n" +
           "Olá, sou seu Alexo para lembrar frases marcantes de Todo Mundo Odeia o Chris\n" +
           "[1] Greg\n" +
           "[2] Rochelle\n" +
           "[3] Julius\n" +
           "[4] Sr. Omar\n" +
           "[5] Chris\n" +
           "[6] Sair\n" +
           "_________________________________");
}   

// frases marcantes dos personagens
const frase1 = "Cara, ela tá tão nas sua - Greg"
const frase2 = "Eu não preciso disso, meu marido tem dois empregos - Rochelle";
const frase3 = "Se eu não comprar nada, o desconto é maior - Julius"; 
const frase4 = "Trágico, muito trágico - Sr. Omar";
const frase5 = "Se eu não agradecesse ao Senhor, minha mãe me mandaria";
const frase6 = "Até a próxima!";

// lopp do alexo
console.log(comeco());
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
    } else if (opcao === "6") {
        console.log(frase6)
    } else {
        console.log("Opção inválida. Tente novamente.");
        continue;
    }
    recomeco = prompt("Deseja continuar? (sim/não): ").toLowerCase() === "sim";
    if (recomeco) {
        console.log(comeco());
    } else
        continuar = false;
       if (continuar=== false) {
    
        console.log("Obrigado por participar!");
    }
}
