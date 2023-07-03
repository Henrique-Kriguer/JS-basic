// a palavra reservada arguments permite que sejam resgatados os argumentos 
// lançados para a função com seus respectivos indices.


function ab(){
    console.log(arguments)
}
ab(1,2,4,'henrique',200);

// explorando os argumentos lançados como parametros da função:
//veja que os valor "c" não foi lançado como argumento da função abc, onde ele retornou undefined
function abc(a,b,c){
    console.log(a,b,c)
}
abc(1,'hk');