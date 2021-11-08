//Exercício: deletando propriedades

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
        nome: "Saruman",
        classe: "mago"
    },
    status: "desaparecido"
}

delete objPersonagem.nivel
delete objPersonagem.status

objPersonagem.aliado.nome = "Bilbo Bolseiro"
objPersonagem.aliado.classe = "Hobbit"

objPersonagem.titulo = "O Cinzento"

objPersonagem.coisasFavoritas = { entretenimento: "Erva de Hobbit", objetos: "Fogos de artifício" }
console.log(objPersonagem)