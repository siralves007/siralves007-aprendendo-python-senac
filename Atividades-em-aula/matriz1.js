function somaMatrizes(m1, m2) {
    let resultado = [];
    for (let i = 0; i < 3; i++) {
        resultado[i] = [];
        for (let j = 0; j < 3; j++) {
            resultado[i][j] = m1[i][j] + m2[i][j];
        }
    }
    return resultado;
}

let matriz1 = [
    [1, 1, 1],
    [4, 4, 4],
    [7, 7, 7]
];

let matriz2 = [
    [9, 9, 9],
    [6, 6, 6],
    [3, 3, 3]
];

let soma = somaMatrizes(matriz1, matriz2);
console.log("Matriz Soma:");
console.log(soma);

