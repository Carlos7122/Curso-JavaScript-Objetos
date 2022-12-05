//DESAFIO - CLIENTE GENÉRICO
//Gerar uma função que permita a criação de novos clientes a partir de um modelo.
function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function (valor) {
        this.saldo =+ valor;
    }
}

const nicoly = new Cliente(
    "Nicoly Souza",
    50213730804,
    "nicoly@gmail.com",
    200,
    200
);

console.log(nicoly);