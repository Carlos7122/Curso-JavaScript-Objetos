//DESAFIO - OFERTA DE SEGURO
//Percorrer um objeto, verificar se existe a chave `dependentes` e, caso exista, enviar uma mensagem de oferta de seguro

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

function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes"))
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

//verificando se o cliente tem um e-mail
function verificacaoEmail(obj) {
    const verificacao = Object.keys(obj);
    if (verificacao.includes("email")){
        console.log(`Parabens ${obj.nome} seu email foi confirmado ele é o ${obj.email}`);
    }
}

verificacaoEmail(cliente);


// console.log(Object.values(cliente));
// console.log(Object.entries(cliente));
// oferecerSeguro(cliente);
