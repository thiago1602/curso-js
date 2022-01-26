function criaPessoa(nome, sobrenome){
    return{
        nome, sobrenome,
        fala: function(assunto){
            return `${nome} está ${assunto}.`;
        }
    } ;
}

const p1 = criaPessoa('Thiago', 'Moraes');
console.log(p1);