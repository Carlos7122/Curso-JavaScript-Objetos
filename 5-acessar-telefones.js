//DESAFIO - LISTA DE TELEFONE
//Acessar a lista de números de telefone das pessoas cadastradas no sistema e imprimi-la, verificando mais de um número em algum cadastro

const cliente = {
    nome: "Carlos",
    idade: 22,
    cpf: "34565432145",
    email: "carlosguilherme71222@gmail.com",
    fones: ["983333333", "957778777"]
}

cliente.fones.forEach(fone => console.log(fone));