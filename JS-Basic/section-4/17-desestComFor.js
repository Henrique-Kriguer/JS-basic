// os tras pontos ( ...) é o REST OPERATOR, que atribui o resto da declaração ao ultimo par^metro da função.

function conta (operador, acumulador, ...numeros){
    if(operador === "+"){
        for (let numero of numeros){
            acumulador += numero;
        }   
    }else if(operador === "-"){
        for (let numero of numeros){
            acumulador -= numero;
        }
    }else if(operador === "*"){
        for (let numero of numeros){
            acumulador *= numero;
        }  
    }else if(operador === "/"){
        for (let numero of numeros){
            acumulador /= numero;
        }
    }
    console.log(acumulador)
}
conta("/", 1, 10, 20, 30, 40, 50);