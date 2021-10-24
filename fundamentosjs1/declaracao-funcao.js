//funções



//função na forma declaração de função:
//function nome() {
//blocodecodigo
//}


//ex:
function soma(num1, num2) {
    return num1 + num2
}

// console.log(soma(2, 2))

function aoQuadrado(num1, num2) {
    return soma(num1, num2) * soma(num1, num2)
}

// console.log(aoQuadrado(8, 2))

let nome = "Carol"

function meuNome(texto) { // 4 - nome entra em texto
    return texto // 5 - nome entra em texto no return, que retorna o valor de nome
}

function frase(texto) { //2 - nome entra em texto
    return "Oi pé de " + meuNome(texto) // 3 - nome  entra em meuNome
}

console.log(frase(nome)) // 1 - nome entra em frase     // 6 - nome é impresso na tela com console.log (junto c
//as outras coisas da função frase())

