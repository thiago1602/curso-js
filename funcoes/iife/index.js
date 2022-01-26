(function(){
    const sobrenome = 'Moraes';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Thiago'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(30,70,1.80);

