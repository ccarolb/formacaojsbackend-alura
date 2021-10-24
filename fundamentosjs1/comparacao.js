//comparação implícita
const num = "5"
const outroNum = 5

console.log(num == outroNum)
console.log("\n")

//comparação explícita

console.log(num === outroNum) //retorna false
console.log(num === String(outroNum)) //retorna true. Boas práticas é converter e usar o ===

