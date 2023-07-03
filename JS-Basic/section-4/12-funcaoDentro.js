function soma(a,b){
    console.log(a+b);
}
//soma(2,3);

function ExecutaFuncao(funcao){
    funcao(2,3);
    console.log("soma efetuada")
};
ExecutaFuncao(soma);