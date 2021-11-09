//Exercício: puxando relatório

const cliente = {
    nome: "Carolina",
    idade: 21,
    email: "carol@email.com",
    CPF: "12345678910-11",
    dependentes: [{
        nome: "Nina",
        idade: 2,
        espécie: "felina",
    },
    {
        nome: "Betina",
        idade: 2,
        espécie: "felina",
    },
    {
        nome: "Kiki",
        idade: 1,
        espécie: "felina",
    }],
    saldo: 500,
    deposito: function (valor) {
        this.saldo += valor
    }
}

let relatorio = ""

for (let dado in cliente) {
    if (typeof cliente[dado] === "object" || typeof cliente[dado] === "function") {
        continue
    } else {
        relatorio += `
       ${dado} => ${cliente[dado]}
        `
    }

}
console.log(relatorio)