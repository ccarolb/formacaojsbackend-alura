//Exercício: Deletando elementos
//Um professor acidentalmente lançou 5 notas no sistema para um aluno: 10, 6, 8, 5.5 e 10.
//Para corrigir, remova a última nota e calcule a média corretamente.

let notas = [10, 6, 8, 5.5, 10]
notas.pop()
console.log(notas)

let somaNotas = notas.reduce((a, b) => { return a + b })
let media = (somaNotas / notas.length).toFixed(2)
console.log(media)