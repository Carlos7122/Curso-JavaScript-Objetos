function Veiculo(tipo, marca, modelo, ano){
    this.tipo = tipo;
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
};

const veiculo1 = new Veiculo(
    'Carro',
    'Renault',
    'Sandero 1.6',
    2013
);

const veiculo2 = new Veiculo(
    'Carro',
    'Chevrolet',
    'Corsa wind',
    2002
);

console.log(veiculo1);
console.log(veiculo2);