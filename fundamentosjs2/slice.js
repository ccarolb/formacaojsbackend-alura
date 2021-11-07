//Exercício: sala dividida
//Divida os alunos da sala abaixo em duas listas com a mesma quantidade de alunos.

let turma = ["João", "Juliana", "Ana", "Caio", "Lara", "Marjorie", "Guilherme", "Aline", "Fabiana", "André", "Carlos", "Paulo"]

let turma1 = turma.slice(0, turma.length / 2) //corta a partir do índice 0 e vai até o índice 5.
let turma2 = turma.slice(turma.length / 2) //corta a partir do índice 6 e vai até o final.
console.log(`Os alunos da turma 1 são: ${turma1}`)
console.log(`Os alunos da turma 2 são: ${turma2}`)