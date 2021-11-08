//Exercício: adicionando campos
//Adicionar informações importantes que estão faltando, como telefone, endereço, e também seus valores.

const cliente = {
    nome: "Carolina",
    idade: 21,
    email: "carol@email.com",
    CPF: "12345678910-11"
}

//Adiciona telefone e endereço
cliente.fone = "XXXXX-XXXX"
cliente.endereco = "Rua dos Campos"
console.log(cliente)

//Altera o endereço
cliente.endereco = "Rua das Flores"
console.log(cliente)