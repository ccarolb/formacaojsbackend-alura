//Exercício: ponto extra
//Um aluno recebeu um ponto extra para cada uma de suas notas. Considerando que a nota máxima é 10, adicione esse ponto nas notas dele: 10, 9, 8, 7, 6.

let notas = [10, 9, 8, 7, 6]
let notaCorreta = notas.map((nota) => nota === 10 ? nota : ++nota)

console.log(notaCorreta)

//Exercício: padronizando os nomes
//Precisamos padronizar a lista de alunos para conter apenas letras maiúsculas: ["ana Julia", "Caio vinicius", "BIA silva"]

let alunos = ["ana Julia", "Caio vinicius", "BIA silva"]

let listaAlunos = alunos.map(aluno => aluno.toUpperCase())
console.log(listaAlunos)