//Declaração de função (Function Hosting)
function falaOi(){
    console.log('Oi');
}

falaOi();

//First-class objects(Objetos de primeira classe)
const souUmDado = function(){
    console.log('sou um dado');
};

function executarFuncao(funcao){
    funcao();
}

executarFuncao(souUmDado);

// Arrow function

const funcaoArrow = () => {
    console.log('Arrow function');
}

funcaoArrow();

// Dentro de um objeto

const obj = {
    falar: function(){
        console.log('Estou falando...')
    }
};

obj.falar();