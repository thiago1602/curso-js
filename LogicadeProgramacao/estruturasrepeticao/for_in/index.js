//For in -> lê os indices ou chaves do objeto
/* const frutas = ['Melancia', 'Abacaxi', 'Laranja'];

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

for (let i in frutas){
    console.log(frutas[i]);
} */

const pessoa = {
    nome : 'Thiago',
    sobrenome : 'Moraes',
    idade : 26
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}