//string
const stringSimples = "Este é um texto"
const nome = "Carolina"
const apresentacao = "Meu nome é "

//concatenação
console.log(apresentacao + nome)
console.log("Meu nome é " + nome)

//template string ou template literal
console.log(`Meu nome é ${nome}`)

//codificação de strings
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//testando alguns métodos de manipulação de string

const meuNomeMaiusc = nome.toUpperCase(); //resultado = CAROLINA
console.log(meuNomeMaiusc)

const meuNomeMinusc = nome.toLowerCase(); //resultado = carolina
console.log(meuNomeMinusc)

//testando método de converter array de num pra string

//exerciciosnumerosarmstrong
let arrayNumeros = [9]

let resultado = 0;

let arNumString = String(arrayNumeros)
for (i = 0; i < arNumString.length; i++) {
    let result = Math.pow(arNumString[i], arNumString.length)
    resultado += result;
}

console.log(resultado)

if (resultado == arrayNumeros) {
    console.log("a")
} else {
    console.log("b")
}

//console.log(arNumString)
//console.log(arNumString[0])

let arrayNumString = arrayNumeros.toString();
//console.log(arrayNumString)
//console.log(arrayNumString[0])