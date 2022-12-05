//DESAFIO - LISTA DE DEPENDENTES
//Extrair de uma listagem de clientes apenas as informações de dependentes e montar uma lista única, para análise de outros departamentos do banco.

const clientes = [
    {
        nome: "Monkey D. Dragon",
        idade: 50,
        poder: "desconhecido",
        dependentes: [{
            nome: "Sabo",
            Idade: 20,
            poder: "Fogo"
        },
        {
            nome: "Monkey D. Luffy",
            Idade: 18,
            poder: "Borracha"
        }],
    },
    {
        nome: "Gold D. Roger",
        Idade: 55,
        Poder: "NaN",
        dependentes: [{
            nome: "Portgas D. Ace",
            idade: 21,
            poder: "Fogo",
        },
        {
            nome: "Shanks",
            idade: 39,
            poder: "NaN",
        }
    ]
    }
]

const infoDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]
console.table(infoDependentes);
