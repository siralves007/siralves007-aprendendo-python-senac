// Transposição de Matriz: Escreva uma função que receba uma matriz 3x3 e retorne sua transposta (troque linhas por colunas).
const prompt = require('prompt-sync')();

let matriz = [];
for (let i = 0; i < 3; i++) {
    let linha = prompt(`Digite os 3 números da linha ${i + 1}, separados por vírgula: `);
    matriz[i] = linha.split(',').map(Number);
}

function transporMatriz(m) {
    let transposta = [];
    for (let i = 0; i < 3; i++) {
        transposta[i] = [];
        for (let j = 0; j < 3; j++) {
            transposta[i][j] = m[j][i];
        }
    }
    return transposta;
}

let matrizTransposta = transporMatriz(matriz);

console.log("Matriz Transposta:");
for (let i = 0; i < 3; i++) {
    console.log(matrizTransposta[i]);
}
