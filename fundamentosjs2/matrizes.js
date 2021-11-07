//Exercício: lista com duas dimensões
//a) Crie uma lista com os seguintes alunos e alunas: "João", "Juliana", "Caio", "Ana"
//b) Crie uma lista com as seguintes médias: 10, 8, 7.5, 9
//c) Crie uma lista com 2 dimensões: os nomes e as médias.

//a)
let nomes = ["João", "Juliana", "Caio", "Ana"]

//b)
let notas = [10, 8, 7.5, 9]

//c
let nomeComNota = [nomes, notas]

let anuncioNota = [
    { nome: nomeComNota[0][0], nota: nomeComNota[1][0] },
    { nome: nomeComNota[0][1], nota: nomeComNota[1][1] },
    { nome: nomeComNota[0][2], nota: nomeComNota[1][2] },
    { nome: nomeComNota[0][3], nota: nomeComNota[1][3] },
]

console.log(anuncioNota)