//Exercício: Compondo um objeto
//Adicionar dependentes para um dos clientes cadastrados, com nome, idade e parentesco.

const cliente = {
    nome: "Carolina",
    idade: 21,
    email: "carol@email.com",
    CPF: "12345678910-11"
}

cliente.dependentes = [{
    nome: "Nina",
    idade: 2,
    espécie: "felina"
},
{
    nome: "Betina",
    idade: 2,
    espécie: "felina"
},
{
    nome: "Kiki",
    idade: 1,
    espécie: "felina"
}]

console.log(cliente)

//Alterando o valor da propriedade
cliente.dependentes[0].idade = 2.5
console.log(cliente)