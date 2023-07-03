function rand(min = 1000, max = 3000){
    const num = Math.random()*(max-min) + min
    return Math.floor(num);
}

function f1(callback){
    setTimeout(function() {
        console.log('f1');
        if (callback) callback();
    }, rand());
}
function f2(callback){
    setTimeout(function() {
        console.log('f2');
        if (callback) callback();
    }, rand());
}
function f3(callback){
    setTimeout(function() {
        console.log('f3');
        if (callback) callback();
    }, rand());
}
//
//f1();
//f2();
//f3();
//console.log('olá mundo!');
//
// veja que executando o codigo da forma aleatória, a cada execução a ordem é aleatoria para f1,f2,f3 e 
// o console.log sempre executa primeiro . 
// a seguir uma forma de encadear a execução de cada função na ordem pré estabelecida,
// utilizando funções anonimas
//  independente do tempo que cada uma vai ser executada.

// f1(function(){
//    f2(function(){
//        f3(function(){
//            console.log('Ola Mundo');
//        })
//    })
//});
//

// Outra maneira mais elegante:

f1(f1callback);

function f1callback(){
    f2(f2callback);
}
function f2callback(){
    f3(f3callback);
}
function f3callback(){
    console.log('olá mundo !');
}




