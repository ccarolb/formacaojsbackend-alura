const cadastro = [ //classe: pessoas
    // objeto: linha inteira
    //atributos: cadastro.nome, cadastro.cargo, cadastro.senha
    { nome: "Patrícia", cargo: "funcionária", senha: "12345" },
    { nome: "Carolina", cargo: "diretora", senha: "123456" },
    { nome: "Eduarda", cargo: "funcionária", senha: "0123" },
    { nome: "Rosane", cargo: "funcionária", senha: "$0123" },
    { nome: "Cintia", cargo: "funcionária", senha: "@221b" },
    { nome: "Luma", cargo: "funcionária", senha: "4567" },
]

const mensagemValidacao = (senha) => {
    let login = cadastro.map((pessoa) => {
        if (senha !== pessoa.senha) {
            return `Senha inválida! Tente novamente.`
        } else {
            return `${pessoa.nome} logou com sucesso no sistema!`
        }
    })
    return login
}

const login = (senha) => {
    return mensagemValidacao(senha)
}

console.log(login("12345"))

let listaSenhas = ["12345", "123456", "@221b", "455", "123", "@123"]