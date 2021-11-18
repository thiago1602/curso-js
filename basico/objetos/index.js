const pessoa1 = 
{
    nome:'Thiago',
    sobrenome:'Moraes',
    idade:26,

    fala(){
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();

/* function criaPessoa(nome, sobrenome, idade)
{
return {
    nome,
    sobrenome ,
    idade
    }
}

const pessoa1 = criaPessoa('Thiago', 'Moraes', 26);
const pessoa2 = criaPessoa('Maria', 'Moraes', 23);
const pessoa3 = criaPessoa('Bruna', 'Moraes', 21);
const pessoa4 = criaPessoa('Lucas', 'Moraes', 28);
const pessoa5 = criaPessoa('Laissa', 'Moraes', 25); */

//console.log(pessoa1.nome, pessoa2.nome)
/* const pessoa1 = {
    nome : 'Thiago',
    sobrenome : 'Moraes',
    idade : 26
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
 */
