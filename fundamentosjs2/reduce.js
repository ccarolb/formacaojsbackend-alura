//Exercício: média das turmas
//Com a média de todos os alunos de 3 salas, calcule a média geral de cada sala:

const salaJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function mediaTurmas() {
    let mediaJs = salaJs.reduce((a, b) => (a + b)) / salaJs.length
    console.log(`A média da turma de Javascript foi ${mediaJs}`)

    let mediaJava = salaJava.reduce((a, b) => (a + b)) / salaJava.length
    console.log(`A média da turma de Java foi ${mediaJava}`)

    let mediaPython = salaPython.reduce((a, b) => (a + b)) / salaPython.length
    console.log(`A média da turma de Python foi ${mediaPython}`)
}

mediaTurmas()