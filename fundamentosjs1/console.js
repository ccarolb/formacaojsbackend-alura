//console.log
console.log("texto")

//console = tipo um terminal que passa a mensagem pro usuário sem ser explicitamente, mas se ele precisar tá ali
// log = registro

//tratamento de erro

console.error('deu erro')

//É sempre uma boa prática nós utilizarmos o console, tanto quanto log quanto error, para sair da nossa aplicação, para sempre sabermos o que está acontecendo dentro dela. Já que se ela, simplesmente, entra, executa e sai, nós não sabemos se teve algum problema no meio. Ás vezes, uma conta entra um dado errado, então, é sempre bom termos esse feedback da aplicação, para sabermos o que está acontecendo.

//Erro da forma correta (trabalhando um pouco com classes em JS)

console.log("deu erro");
console.error(new Error("deu erro"));

//O que vimos acima - a palavra-chave new seguida de Error com inicial maiúscula - é um gostinho de como trabalhamos com classes em JavaScript.