// Note que uma função é um objeto de primeira classe (FIRST CLASS OBJECT)
// onde podemos declarar ua função dentro de uma variavel ( const, let, var)

const funcaoArrow = () => {
    console.log('sou uma arrow function')
}
funcaoArrow();

var funcaoArrow2 = () => {
    console.log('sou uma arrow function 2')
}
funcaoArrow2();

let funcaoArrow3 = () => {
    console.log('sou uma arrow function 3')
}
funcaoArrow3();

// função sendo um atributo do objeto:

const obj = {
    falar: function() {
        console.log("começando a falar");
    }
};
obj.falar();

// podemos suprimir os dois pontos e a palavra function 

const obj2 = {
    falar2() {
        console.log("começando a falar 2");
    }
};
obj2.falar2();