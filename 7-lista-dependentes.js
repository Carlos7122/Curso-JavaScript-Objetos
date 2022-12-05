//DESAFIO - LISTAS DE DEPENDENTES
//Verificar a melhor forma de agregar a informação de um novo dependente ao objeto Cliente

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
    }]
}

//adicionando mais um dependente
cliente.dependentes.push({
    nome: "Chloe",
    parentesco: "filha",
    dataNasc: "04/01/2014"
})

//console.log(cliente);

//filtrando dependentes
const esposaDoCliente = cliente.dependentes.filter(dependente => dependente.parentesco === "Esposa");

console.log(esposaDoCliente[0].parentesco);