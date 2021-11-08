//Exercício: filtrando por nota
//Depois de calcular a média dos alunos, precisamos mostrar quem está reprovado entre os alunos "Ana", "Marcos", "Maria", "Mauro", com as respectivas notas: [7, 4.5, 8, 7.5].

let nomeNota = [
    { nome: "Ana", nota: 7 },
    { nome: "Marcos", nota: 4.5 },
    { nome: "Maria", nota: 8 },
    { nome: "Mauro", nota: 7.5 }
]

function verificaAprovacao() {
    return nomeNota.filter(aluno => aluno.nota >= 7 ? console.log(`${aluno.nome} está aprovado.`) : console.log(`${aluno.nome} está reprovado.`))
}

verificaAprovacao()

//Outra forma de fazer:

let nomes = ["Ana", "Marcos", "Maria", "Mauro"]
let notas = [7, 4.5, 8, 7.5]

function verificaAprovados() {
    let reprovados = nomes.filter((_, indice) => notas[indice] < 7)
    return reprovados
}

console.log(verificaAprovados())