//Exercício: oferta de seguro
//Percorrer um objeto, verificar se existe a chave "dependentes", e caso exista, enviar uma mensagem de oferta de seguro.
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

function ofertaSeguro(obj) {
    if (Object.keys(obj).includes("dependentes")) {
        console.log(`Oferecer seguro a ${obj.nome}`)
    }
}


ofertaSeguro(cliente)