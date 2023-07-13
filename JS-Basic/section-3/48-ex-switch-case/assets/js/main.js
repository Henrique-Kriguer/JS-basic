const data = new Date();
console.log(data);
let diaSemanaTexto ;
let diaSemana = data.getDay();
let diatexto = data.getDate();
let mes = data.getMonth();
let anoTexto = data.getFullYear();
let mesTexto;
let horatexto = data.getHours();
let minutoTexto = data.getMinutes();
console.log(diaSemana);

switch(diaSemana) {
    case 0:
        diaSemanaTexto = 'domingo'
        break;
    case 1:
        diaSemanaTexto = 'segunda-feira'
        break;
    case 2:
        diaSemanaTexto = 'terça-feira'
        break;
    case 3:
        diaSemanaTexto = 'quarta-feira'
        break;
    case 4:
        diaSemanaTexto = 'quinta-feira'
        break;
    case 5:
        diaSemanaTexto = 'sexta-feira'
        break;
    case 6:
        diaSemanaTexto = 'sabado'
        break;
    default:
        diaSemanaTexto = ""
        break
    }
    
    console.log(diaSemanaTexto);

    switch(mes){
        case 0:
            mesTexto = 'janeiro'
            break;
            
        case 1:
            mesTexto = 'fevereiro'
            break;
            
        case 2:
            mesTexto = 'março'
            break;
            
        case 3:
            mesTexto = 'abril'
            break;
            
        case 4:
            mesTexto = 'maio'
            break;
            
        case 5:
            mesTexto = 'junho'
            break;
            
        case 6:
            mesTexto = 'julho'
            break;
            
        case 7:
            mesTexto = 'agosto'
            break;
            
        case 8:
            mesTexto = 'setembro'
            break;
            
        case 9:
            mesTexto = 'outubro'
            break;
            
        case 10:
            mesTexto = 'novembro'
            break;
                    
        case 11:
           mesTexto = 'dezembro'
                break;
    }
    const dataTela = document.getElementById('liveData');
    
    dataTela.innerHTML = `${diaSemanaTexto}, ${diatexto} de ${mesTexto} de ${anoTexto}.`;

    const horaTela = document.getElementById('liveHour');
    
    horaTela.innerHTML = `${horatexto}:${minutoTexto}`