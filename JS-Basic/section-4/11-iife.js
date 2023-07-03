// quando criamos uma função e chamamos ela de imediato, dentro do escopo, a mesma é executada antes de ler as demais linhas do código

(function (){
    function funcao1(){
    console.log("função 1")
    }
    funcao1();
}())

(function (){
        function funcao1(){
            console.log(" nova função 1")
        }
    funcao1();
}())
