//arrow function:

let idades = [
    { nome: "Carolina", idade: 21 },
    { nome: "Davi", idade: 20 },
    { nome: "Senhora", idade: 50 }
]

const somaIdades = () => {
    let idade = idades.map((pessoa) => pessoa.idade).reduce((pessoa1, pessoa2) => pessoa1 + pessoa2)
    return idade
}

console.log(somaIdades())

//Hoisting: arrow function se comporta como a expressão de função