//Exercício: lista de telefones
//Acessar a lista de números de telefone das pessoas cadastradas no sistema e imprimi-la, verificando se há mais de um número em algum cadastro.

const cliente = {
    nome: "Carolina",
    idade: 21,
    email: "carol@email.com",
    CPF: "12345678910-11",
    fone: ["5599992323", "552190667004", "5587779566"]
}

cliente.fone.forEach(fone => console.log(`Telefone cadastrado: ${fone}`))