// Um problema das variáveis de escopo global no JavaScript é que elas são sobrescritas e não há mensagem de erro

function funcao1(){
    console.log("função 1")
}
function funcao1(){
    console.log(" nova função 1")
}

funcao1();