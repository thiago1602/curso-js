const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;
    switch (diaSemana)
{
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
        case 1:
        diaSemanaTexto = 'Segunda-Feira';
        break;
        case 2:
        diaSemanaTexto = 'Terça-Feira';
        break;
        case 3:
        diaSemanaTexto = 'Quarta-Feira';
        break;
        case 4:
        diaSemanaTexto = 'Quinta-feira';
        break;
        case 5:
        diaSemanaTexto = 'Sexta-Feira';
        break;
        case 6:
        diaSemanaTexto = 'Sábado';
        break;
    default:
        diaSemanaTexto = '';

}

return diaSemanaTexto;
}
h1.innerHTML = getDiaSemanaTexto(data.getDay());