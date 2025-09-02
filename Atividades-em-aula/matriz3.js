let matrizA = [ // declara matriz 1
    [1, 1],
    [1, 1]
];

let matrizB = [ // declara matriz 2
    [5, 6],
    [7, 8]
];

function multiplicarMatrizes(a, b) { // corrigido a função de multiplicação 
    let resultado = [
        [0, 0],
        [0, 0]
    ];
    for (let i = 0; i < 2; i++) { 
    for (let j = 0; j < 2; j++) {
            resultado[i][j] = a[i][j] * b[i][j]; 
        }
    }
    return resultado;
}

function imprimirMatriz(matriz, nome) {
    console.log(nome);
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(" "));
    }
}

imprimirMatriz(matrizA, "A primeira era matrizA:"); // imprime matriz 1
imprimirMatriz(matrizB, "A segunda era matrizB:"); // imprime matriz 2
let resultado = multiplicarMatrizes(matrizA, matrizB);
imprimirMatriz(resultado, "Matriz Resultante da Multiplicação A x B:");