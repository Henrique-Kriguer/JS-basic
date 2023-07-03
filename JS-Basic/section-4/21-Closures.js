function retornaFuncao(nome){
    //const nome = 'Henrique Kriguer';
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao("Henrique Kriguer");
console.dir(funcao);


const funcao2 = retornaFuncao("Simone Kriguer");
console.dir(funcao2);