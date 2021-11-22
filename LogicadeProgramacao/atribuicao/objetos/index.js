const pessoa = {
    nome: 'Thiago',
    sobrenome: 'Moraes',
    idade: 26,
    endereco: {
        rua:'Av Brasil',
        numero: '414'
    }
};
//atribuição via desustruturação
const { nome, sobrenome, idade } = pessoa;
console.log(nome, sobrenome);