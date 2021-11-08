//Exercício: printar infos
//Acessar um objeto com informações de um cliente e exibir essas informações no console.

const cliente = {
    nome: "Carolina",
    idade: 21,
    email: "carol@email.com",
    CPF: "12345678910-11"
}

//Acessando o valor da chave do objeto por meio da notação de ponto.
console.log(`O nome da cliente é ${cliente.nome}`)

//Exercício: acessar chaves
//Consultar um objeto utilizando uma lista de chaves relativas a informações de clientes geradas pelo sistema e printar o resultado na tela.

//Acessando  o valor da chave do objeto por meio da notação de colchetes: lista de chaves; chave como variável.
const chaveClientes = ["nome", "idade", "email", "CPF"]
//Forma 1:
console.log(`O CPF da cliente é ${cliente[chaveClientes[3]].substring(0, 3)}`)
//Forma 2:
console.log(`A idade da cliente é ${cliente["idade"]}`)

//Exibindo na tela todas as informações da cliente:
chaveClientes.forEach((info) => console.log(cliente[info]))