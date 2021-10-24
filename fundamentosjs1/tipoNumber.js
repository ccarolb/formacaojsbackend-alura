const primeiroNumero = 3
const segundoNumero = 5

const somaNumeros = primeiroNumero + segundoNumero

console.log(somaNumeros)

//Ponto Flutuante

const pontoFlutuante = .7
const novoPontoFlutuante = 4.3

const multiplicaNumeros = primeiroNumero * pontoFlutuante

console.log(multiplicaNumeros)

//NaN = Not a Number

const string = "texto"

const operacaoComString = string * primeiroNumero

console.log(operacaoComString)

//Teste concatenação com string

console.log(3 + 2 + "5") // = resultado no terminal deu 55

console.log("3" + 2)

const num = "3"

console.log(num + 2)

const multiplicaString = num * 2
console.log(multiplicaString) // = resultado no terminal deu 6

const divideString = num / 2
console.log(divideString) // = resultado no terminal deu 1.5

const subtraiString = num - 2
console.log(subtraiString) // = resultado no terminal deu 1

const somaString = num + 2
console.log(somaString) // = resultado no terminal deu 32
//Conclusão: o símbolo de adição CONCATENA a string num ("3") com o número 2.

var somaString2 = +num + 2
console.log(somaString2) // = resultado no terminal deu 32
//Conclusão: o símbolo de adição ANTES da string que contenha um número (nesse caso num contém "3"), transforma a string em int antes da operação, o que permite adicionar invés de concatenar.