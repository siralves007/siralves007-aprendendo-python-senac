// Chat alexo que te dá uma frase para o personagem escolhido

const prompt = require("prompt-sync")();   
// frases marcantes dos personagens
const frase1 = "Cara, ela tá tão nas sua - Greg"
const frase2 = "Eu não preciso disso, meu marido tem dois empregos - Rochelle";
const frase3 = "Se eu não comprar nada, o desconto é maior - Julius"; 
const frase4 = "Trágico, muito trágico - Sr. Omar";
const frase5 = "Se eu não agradecesse ao Senhor, minha mãe me mandaria";
const frase6 = "Até a próxima!";
let separador = "_________________________________";

// entrada do nome do usuário 
let usuario = prompt("Digite seu nome: ");

function comeco(usuario) { // função do menu inicial
    return `________________________________
Olá, ${usuario}, para lembrar frases marcantes de Todo Mundo Odeia o Chris
[1] Greg
[2] Rochelle
[3] Julius
[4] Sr. Omar
[5] Chris
[6] Sair
_________________________________`;
} 

// lopp do alexo
console.log(comeco(usuario));
let continuar = true
while (continuar === true) {
   let opcao = prompt("Escolha uma frase entre 1 a 5:");
    if (opcao === "1") {
        console.log(separador);
        console.log(frase1);
    } else if (opcao === "2") {
        console.log(separador);
        console.log(frase2);
    } else if (opcao === "3") {
        console.log(separador);
        console.log(frase3);
    } else if (opcao === "4") {
        console.log(separador);
        console.log(frase4);
    } else if (opcao === "5") {
        console.log(separador);
        console.log(frase5);
    } else if (opcao === "6") {
         console.log(separador);
        console.log(frase6)
    } else {
        console.log("Ei, carinha que mora loga ali, você digitou algo inválido.");
        continue;
    }
    console.log(separador);
    recomeco = prompt("... Carinha que mora logo ali, quer continuar? Digite sim ou não, aproveita que tá de graça: ").toLowerCase() === "sim";
    if (recomeco) {
        console.log(comeco(usuario));
    } else
        continuar = false;
       if (continuar=== false) {
    
        console.log("Carinha, hoje não preciso de um dollar, até a próxima.");
    }
}
