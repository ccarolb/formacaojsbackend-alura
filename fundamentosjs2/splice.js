//Exercício: Atualizando elementos
//Crie uma lista de chamada com os seguintes alunos: "João", "Juliana", "Ana", "Caio", "Lara", "Marjorie"
//Porém a Ana e o Caio mudaram de escola e o Rodrigo entrou nessa turma. Atualize a lista.

let chamada = ["João", "Juliana", "Ana", "Caio", "Lara", "Marjorie"]
console.log(`A lista de chamada é: ${chamada}`)

chamada.splice(2, 2, "Rodrigo") //primeiro parâmetro: índice para iniciar o splice; segundo: quantos elementos serão cortados do array (opcional: caso passe o valor 0, nada é retirado); terceiro: o que será adicionado no lugar desses elementos (opcional).
console.log(`A nova lista de chamada é: ${chamada}`)

