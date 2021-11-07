//Exercício: For
//Imprima o índice e a lista com os seguintes números: 100, 200, 300, 400, 500, 600.

const numeros = [100, 200, 300, 400, 500, 600]

for (let i = 0; i < numeros.length; i++) {
    console.log(`Para o índice ${i}, o número correspondente é ${numeros[i]}`)
}

//Exercício: Média com for
//Calcule a média de um array de notas utilizando o for.

function mediaNotas() {
    let notas = [6, 7.5, 8, 10, 9]
    let somaNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaNotas += notas[i]
    }

    return somaNotas / notas.length
}

console.log(mediaNotas())