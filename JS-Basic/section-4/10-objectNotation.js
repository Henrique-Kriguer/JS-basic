// o problema que detectamos no namespaces anterior é resolvido encapsulando as funções em objetos:

let objeto1 = {
    "funcao1" : function(){
        console.log("função 1")
    }
}

let objeto2 = {
    "funcao1" : function(){
        console.log("nova funçao 1")
    }
}
objeto1.funcao1();
objeto2.funcao1();