//argumetos que sustenta todos os argumentos enviados
/* function funcao(a, b = 2, c = 4){
    console.log(a+b+c);
    }
    
funcao(2,0,20); */

function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;

    }
    console.log(acumulador);
}
conta('*', 5, 20,30,40,50);
