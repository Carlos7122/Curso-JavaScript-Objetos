//DESAFIO - LISTA DE DEPENDENTES
//Extrair de uma listagem de clientes apenas as informações de dependentes e montar uma lista única, para análise de outros departamentos do banco.

const cliente = [
    {
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
    }],
},
{
    nome: "Vera",
    idade: 22,
    cpf: "34565432145",
    email: "carlosguilherme71222@gmail.com",
    fones: ["983333333", "957778777"],
    dependentes: [{
        nome: "Carlos Henrique",
        parentesco: "Esposa",
        dataNasc: "20/03/2011"
    },
    {
    nome: "Carlos Guilherme",
    parentesco: "filha",
    dataNasc: "04/01/2014"
    }],
},
]

const listaDependentes = [...cliente[0].dependentes, ...cliente[1].dependentes];
console.table(listaDependentes);