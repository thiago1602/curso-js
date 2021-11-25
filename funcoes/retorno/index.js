// return

/* function criaPessoa(nome, sobrenome){
    return{
        nome : nome, sobrenome : sobrenome
    };
}

const p1 = criaPessoa('Thiago', 'Moraes');

console.log(typeof p1); */

/* function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Ola');
console.log(olaMundo('mundo')); */

/* function duplica(n){
    return n * 2;
}
function triplica(n){
    return n * 3;
}
function quadruplica(n){
    return n * 4;
}
 */

function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador;
    };
    
}
    const duplica = criaMultiplicador(2);
    const triplica = criaMultiplicador(3);
    const quadruplica = criaMultiplicador(4);
console.log(duplica(2));
console.log(triplica(3));
console.log(quadruplica(4));