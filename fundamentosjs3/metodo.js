//Exercício: funções em contexto de objetos: método
//Adicionar uma propriedade que permita ações, para que o cliente consiga executar operações bancárias.

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

console.log(cliente.saldo)
cliente.deposito(30)
console.log(cliente.saldo)