function mult (multiplicador){
    return function(n){
        return multiplicador * n;
    };
}
const duplica = mult(2);
const triplica = mult(3);
const quadriplica = mult(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
