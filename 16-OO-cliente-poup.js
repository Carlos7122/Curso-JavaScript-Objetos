//CLIENTE POUPANÇA
//APROVEITAR O CLIENTE QUE JÁ EXISTE E CRIAR A PARTIR DELE UM NOVO TIPO DE CLIENTE PARA CONTAS POUPANÇA
class Cliente{
    //Construtor | Instâncias
    constructor(nome, email, cpf, saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    //Funções | Métodos
    depositar(valor){
        this.saldo += valor;
    }

    exibirSaldo(){
        console.log(this.saldo);
    }
}

class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor){
        this.saldoPoupanca += valor; 
    }
}

const carlos = new ClientePoupanca('Carlos', 'carlosguilherme@email.com', 11122233344, 100, 500);

carlos.depositar(33);
carlos.depositarPoupanca(200);
console.log(carlos);
