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

const carlos = new Cliente('Carlos', 'carlosguilherme71222@gmail.com', 50250250204, 400);
console.log(carlos);
carlos.depositar(1000);
carlos.exibirSaldo();

