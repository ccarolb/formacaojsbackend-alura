//Exercício 2: Procurando na lista
//a) Crie uma função que recebe como argumento o nome de um aluno
//b) Verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo índice.
//c) Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.

let nomes = ["João", "Juliana", "Caio", "Ana"]
let notas = [10, 8, 7.5, 9]
let nomeComNota = [nomes, notas]

function buscaAluno(aluno) {

    if (nomeComNota[0].includes(aluno)) {
        let indice = nomeComNota[0].indexOf(aluno)
        return `${nomeComNota[0][indice]}, sua nota é ${nomeComNota[1][indice]}.`
    } else {
        return "O aluno não foi encontrado."
    }
}

console.log(buscaAluno("João"))