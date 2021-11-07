//Exercício: ponto extra
//Um aluno recebeu um ponto extra para cada uma de suas notas. Considerando que a nota máxima é 10, adicione esse ponto nas notas dele: 10, 9, 8, 7, 6.

let notas = [10, 9, 8, 7, 6]
let notaCorreta = notas.map((nota) => nota === 10 ? nota : ++nota)

console.log(notaCorreta)