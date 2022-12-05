//DESAFIO - FAZENDO DEPÓSITOS
//Adicionar uma propriedade que permita "ações", para que os clientes que estão cadastrados consigam fazer operações bancárias.
const cliente = {
    nome: "Carlos/",
    idade: 22,
    cpf: "34565432145",
    email: "carlosguilherme71222@gmail.com",
    fones: ["983333333", "957778777"],
    dependentes: [{
        nome: "Nix",
        parentesco: "Esposa",
        dataNasc: "20/03/2011"
    },
    {
    nome: "Chloe",
    parentesco: "filha",
    dataNasc: "04/01/2014"
    }
    ],
    saldo: 100,
    depositar:function(valor){
        this.saldo += valor;
    },
    saque:function(valor){
        this.saldo -= valor;
    }
}

console.log(cliente.saldo);
cliente.saque(30);
console.log(cliente.saldo);
cliente.depositar(100)
console.log(cliente.saldo);