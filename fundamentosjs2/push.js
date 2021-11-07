//Exercício: Adicionando elementos
//Um professor acidentalmente passou apenas 3 das 4 notas no sistema para um aluno: - 10, 6, 8
//Para corrigir, adicione a nota 7 e faça o cálculo da média correta.

let notas = [10, 6, 8]
notas.push(7)
console.log(notas)

let somaNotas = notas.reduce((a, b) => { return a + b })
let media = somaNotas / notas.length
console.log(media)