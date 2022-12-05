//DESAFIO - COMPONDO UM OBJETO
//Adicionar dependentes para um dos clientes cadastrados, com nome, idade e parentesco
const cliente = {
    nome: "Carlos",
    idade: 22,
    cpf: "34565432145",
    email: "carlosguilherme71222@gmail.com",
    fones: ["983333333", "957778777"]
}

cliente.dependentes = {
    nome: "Nix",
    parentesco: "Esposa",
    dataNasc: "20/03/2011"
}

console.log(cliente);

cliente.dependentes.nome = "Nicoly souza";

console.log(cliente);