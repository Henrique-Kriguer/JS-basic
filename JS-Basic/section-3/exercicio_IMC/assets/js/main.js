// 1- Bloqueando o comportamento padrão de submit ao clicar no botão de enviar

function blockFormSubmit() {
    const form = document.querySelector('.form');

    form.addEventListener('submit', function(event){  // função anônima é parâmetro do método listener
        event.preventDefault();

        const inputPeso = event.target.querySelector('.peso');
    const inputAltura = event.target.querySelector('.altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    console.log(peso,altura);

        if(!peso){
            setResultado("Peso Invalido", false);
            return
        }
        if(!altura){
            setResultado("Altura Invalida",false);
            return
        } 

        const imc = calculaImc(peso,altura);
        const imcGrad = getImcGrad(imc);
        const msg = `Seu IMC é ${imc} (${imcGrad})`;

        setResultado(msg, true);

    });

    function criaP (){
        const p = document.createElement('p');
    return p;    
    }

    function calculaImc (peso, altura){
        const imc = peso / (altura ** 2);
    return imc.toFixed(2);
    }

    function getImcGrad (imc){   
        const imcInfo = ["abaixo do Peso.", "peso normal.", "sobrepeso.", "obesidade grau 1.", "obesidade grau 2.", "obesidade grau 3."];
        if (imc <= 18.5)return imcInfo [0] ;
        if (imc > 18.5 && imc <= 24.9) return imcInfo [1] ;
        if (imc > 24.9 && imc <= 29.9) return imcInfo [2]; 
        if (imc > 29.9 && imc <= 34.9) return imcInfo [3] ;
        if (imc > 34.9 && imc <= 39.9) return imcInfo [4];
        if (imc > 39.9) return imcInfo [5];
    }
    
    function setResultado (msg, isValid){
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = '';
        
        const p = criaP();

        if(isValid){ // metodo para criar classe no paragrafo conforme resultado do que foi digitado pelo user
            p.classList.add('paragrafo-resultado')
        } else {
            p.classList.add('bad')
        }
        p.innerHTML = msg
        resultado.appendChild(p);
    }

}

blockFormSubmit();


