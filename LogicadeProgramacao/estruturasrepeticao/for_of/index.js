//For clássico - geralmente com interaveis(array ou strings)
//For in - Retorna indice ou chave(string, array ou objetos)
//For of - Retorna o valor em sim(string, array ou variaveis)

const nome = ['Thiago', 'Laissa','Bruna'];

/* for(let i = 0; i< nome.length;i++){
console.log(nome[i]);
} */

/* for (let i in nome){
    console.log(nome[i]);
} */

for (let valor of nome){
    console.log(valor);
}
console.log('##########');

nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array)
});