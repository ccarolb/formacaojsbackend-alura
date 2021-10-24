const var1 = 1
const var2 = 2

console.log(var1 > var2 ? "var1 é maior que var2" : "var2 é maior que var1")



function verificaMaioridade(idade) {

    //condição         true             false
    console.log(idade >= 18 ? "Maior de idade" : "Menor de idade")
}
verificaMaioridade(24)

//boas práticas: 
//
//condicional dentro de condicional/função dentro de função = aplicar o if else
//
//condicionais pequenos, c poucas coisas = aplicar o operador ternário

//exercício:

function pedidoBebidas(nome, idade) {

    let bebidaMaior = "uma cerveja"
    let bebidaMenor = "um suco"

    console.log(`${nome} pediu ${idade >= 18 ? bebidaMaior : bebidaMenor}`)

}

pedidoBebidas("Carol", 24)

//

function verificaAprovacao() {
    let alunas = [
        { nome: "Carolina", nota: 7 },
        { nome: "Juliano", nota: 10 },
        { nome: "Davi", nota: 9 }
    ]

    return alunas.map((alunas) => {
        console.log(alunas.nota >= 7 ? `${alunas.nome} está aprovada` : `${alunas.nome} está reprovada`)
    })
}

verificaAprovacao()