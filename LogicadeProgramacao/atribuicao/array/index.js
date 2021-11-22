//desestruturação
/* let a = 'A';
let b = 'B';
let c = 'C';

const numeros = [b,c,a];
 [a,b,c] = numeros;

console.log(a,b,c); */
// ... rest, ... spread
/* const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, segundoNumero, ...resto] = numero;
console.log(primeiroNumero, segundoNumero);

console.log(resto); */

const numeros = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9]
];
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);