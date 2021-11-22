//Reaproveitar o protótipo de cliente e criar um novo tipo de cliente, que é o de poupança.

class Cliente {
    constructor(nome, idade, cpf, email, conta, saldo) {
        this.nome = nome,
            this.idade = idade,
            this.cpf = cpf,
            this.email = email,
            this.conta = conta,
            this.saldo = saldo
    }

    depositar(valor) {
        this.saldo += valor
    }

}

class ClientePoupanca extends Cliente {
    constructor(nome, idade, cpf, email, conta, saldo, saldoPoup) {
        super(nome, idade, cpf, email, conta, saldo)
        this.saldoPoup = saldoPoup
    }
    depositarPoup(valor) {
        this.saldoPoup += valor
    }
}

const clientePoup = new ClientePoupanca("Fulano", 21, "23123214435", "fulano@email.com", "23674673467", 0, 0)

clientePoup.depositarPoup(20)

console.log(clientePoup)
