//DESAFIO - ACESSAR CHAVES
//Consultar um objeto utilizando uma lista de chaves relativas a informações de clientes gerada pelo sistema e printar o resultado na tela

const cliente = {
    nome: "Carlos",
    idade: 22,
    cpf: "34565432145",
    email: "carlosguilherme71222@gmail.com"
}

const chaves = ["nome", "idade", "cpf", "email"];

//console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]));