
//função na forma expressão de função

//const nome = function(param){}

// const somaNum = function (num1, num2) { return num1 + num2 } //sempre declarar c const pra n ter perigo de alterar a função
// console.log(somaNum(2, 3))

//diferença principal entre expressão de função e declaração de função: HOISTING (puxar pra cima)
//o js faz o hoisting com a declaração de função, que é quando ele vai ler o código, primeiro ele lista todas as funções de declaração, e as vars, e só dps as outras coisas.
//a expressão de função tem comportamento de variável, então não é puxado pra cima. exemplos:

console.log(somaNum(2, 3)) //vai dar erro q n pode acessar somaNum antes de inicializar a variável.
const somaNum = function (num1, num2) { return num1 + num2 }

console.log(nomeMeu("Carolina")) //vai retornar normal.
function nomeMeu(nome) {
    return `Meu nome é ${nome}`
}
