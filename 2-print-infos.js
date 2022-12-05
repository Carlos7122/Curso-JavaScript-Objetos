//Desafio - Printar infos
//Acessar um objeto com informações de um cliente e exibir essas informações no console

const cliente = {
    nome: "Carlos",
    idade: 22,
    cpf: "34565432145",
    email: "carlosguilherme71222@gmail.com"
}

console.log(`O nome do cliente é ${cliente.nome} e ele tem ${cliente.idade}, seu cpf é ${cliente.cpf} e seu email é ${cliente.email}.`);//acessa um dado que esta dentro do objeto cliente
console.log(cliente.cpf.substring(0,3));