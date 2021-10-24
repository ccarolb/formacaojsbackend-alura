//conversão implícita
const umNumero = 3 //number
const umOutroNumero = "3" //string

console.log(umNumero * umOutroNumero) // retornou 9
console.log(umNumero + umOutroNumero) //retornou 33 pq concatena o number com a string

//conversão explícita

//pra evitar q aquele tipo de coisa aconteça podemos converter explicitamente com as funções:
//Number()
//String()

console.log(umNumero + Number(umOutroNumero)) //retornou 6

const id = "3e4y"

console.log(umNumero + Number(id)) //retornou NaN porque id contém letras além de números, daí n dá p converter p number

//outros exemplos:

const numString = "10"
const outroNumString = "3"

console.log(numString * outroNumString) //converteu implicitamente e retornou 30
console.log(numString + outroNumString) //concatenou e retornou 103
