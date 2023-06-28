const primeiroNumero = 5;
const segundoNumero = 7;
let soma = primeiroNumero + segundoNumero;

console.log(soma);
console.log(typeof(soma));

soma = "Henrique"
console.log(soma);
console.log(typeof(soma));

/* Não podemos atribuir outro valor a uma constante definida :

//  primeiroNumero = 23;rimeiroNumero = 23;
               ^

               TypeError: Assignment to constant variable.*/

const nome = 'Henrique'
const sobrenome = 'Kriguer'
const idade = 51
const peso = 83
const alturaMetro = 1.79
let imc = peso / (alturaMetro **2);
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`);
console.log(`tem ${alturaMetro} de altura e seu IMC é de ${imc}`);
