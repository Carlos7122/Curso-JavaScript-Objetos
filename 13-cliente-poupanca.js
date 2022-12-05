//CLIENTE POUPANÇA
//APROVEITAR O CLIENTE QUE JÁ EXISTE E CRIAR A PARTIR DELE UM NOVO TIPO DE CLIENTE PARA CONTAS POUPANÇA
function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function (valor) {
        this.saldo =+ valor;
    }
};

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, cpf, email, saldo);
    this.saldoPoup = saldoPoup;
};

const carlos = new ClientePoupanca("Carlos", "50013343306", "carlos@gmail.com", 100, 200);

console.log(carlos);

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor;
};

carlos.depositarPoup(1000);
console.log(carlos.saldoPoup);


