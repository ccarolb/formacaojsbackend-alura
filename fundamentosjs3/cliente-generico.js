//Exercício: cliente genérico
//Criar uma função que permita a criação de novos clientes a partir de um modelo.

function Cliente(nome, idade, email, cpf, endereco) {
    this.nome = nome,
        this.idade = idade,
        this.email = email,
        this.cpf = cpf,
        this.endereco = endereco
}

const fulano = new Cliente("Fulano", 21, "fulano@email.com", "23123214435", "Rua Tal")
console.log(fulano)