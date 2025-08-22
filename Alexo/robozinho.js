const PromptSync = require("prompt-sync")();

function finalMessage (messageFinal) { // funções para mensagens com prompt
    return "Quer continuar? Digite 'sim' ou 'não'."
    if (messageFinal.toLowerCase() === 'sim') {
        console.log("Vamos lá!");
    } else {
        console.log("Tudo bem, até a próxima!");
    }
}
function inicio() {
    console.log("Descubra sua frase de 'Todo Mundo Odeia o Chris'!");
    prompt = PromptSync();
    console.log(frase)  
} // Variáveis para as frases do programa (podia ser constantes...)
let frase1 = "Cara, ela tá tão nas sua - Greg"
let frase2 = "Eu não preciso disso, meu marido tem dois empregos - Rochelle";
let frase3 = "Se eu não comprar nada, o desconto é maior - Julius"; 
let frase4 = "Trágico, muito trágico - Sr. Omar";
let frase5 = "Se eu não agradecesse ao Senhor, minha mãe  me mandaria"
let frase = prompt("Escolha um número entre 1 a 5: ");
let erro = prompt("Número inválido. Por favor, escolha um número entre 1 e 5.")

// incio de como o programa funciona
console.log(inicio());

if (frase === "1") {
    console.log(frase1);
    console.log (messageFinal);
}
else if (frase === "2") {
    console.log(frase2);
    console.log (messageFinal);
}
else if (frase === "3") {
    console.log(frase3);
    console.log (messageFinal);
}
else if (frase === "4") {
    console.log(frase4);
    console.log (messageFinal);
}       
else if (frase === "5") {
    console.log(frase5);
    console.log (messageFinal);
}
else {
    console.log(erro);
}