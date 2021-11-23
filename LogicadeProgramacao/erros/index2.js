function retornaHora(data){
    if(!(data instanceof Date)){

        throw new TypeError('Esperando instância de Date');
    }

    if(!data){
        data = new Date();
    }

    return data.toLocalelTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
        
    });
}

try {

    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
}catch(e){
    //tratar erro
}finally{
    console.log('Tenha um bom dia');
}



/* try{

    console.log('Abri um arquivo');
    console.log('Manipulei e Abri um arquivo e gerou erro');


    try{

    }catch(e){
        console.log('Deu erro');
    }finally{
        console.log('Sou eu')
    }
    //É executada quando não há erros
}catch(e){

    console.log('Tratando o erro');
        //É executada quando há erros

} finally{
    // Sempre
    console.log('FINNALY: Eu sempre sou executado');
} */