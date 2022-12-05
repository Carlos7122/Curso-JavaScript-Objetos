//DESAFIO - puxando relatorio
//Percorrer um objeto e extrair informações básicas do cliente em um formato mais legível e de forma automatizada para fornecer a outros departamentos do banco

const cliente = {
    nome: "Carlos",
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

let relatorio = "";

for (let info in cliente) {
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function")
    {
        continue
    } else{
        relatorio += `
        ${info} ==> ${cliente[info]}
        `; 
    }
}

console.log(relatorio);



