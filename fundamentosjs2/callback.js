//Exercício: forEach
//Dada uma lista de nomes, imprima cada nome dessa lista no console, utilizando o forEach.

//Funções callback são funções que chamam outra função dentro delas. Um exemplo é o forEach.

let listaNome = ["Carol", "Davi", "Leo", "Catarina"]

//Arrow function:
// listaNome.forEach(nome => { console.log(nome) })

//Declaração de função:
// listaNome.forEach(function imprimeNome(nome) {
//     console.log(nome)
// })


//Função já existente:
function imprimeNome(nome) {
    console.log(nome)
}

listaNome.forEach(imprimeNome)

