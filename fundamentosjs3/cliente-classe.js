//Criar um protótipo de cliente utilizando classes

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

const cliente = new Cliente("Fulano", 21, "23123214435", "fulano@email.com", "23674673467", 0)

cliente.depositar(50)

console.log(cliente)


