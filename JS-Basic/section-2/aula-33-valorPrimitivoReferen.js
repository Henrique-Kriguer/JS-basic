// as variaveis a e b não apontam para o mesmo local na memória, 
// mas quando atribuímos b = a, ambas apontam para o mesmo local, 
// por isso quando uma é alterada, ambas são:

const a = { 
    nome: 'Henrique',
    sobrenome: 'Kriguer'
}
const b = a;

b.nome = 'João';

console.log(a);
console.log(b);

// as variaveis c e d NÃO apontam para o mesmo local na memória,
// foi atribuido a d um spread do valor de c na memória.
// por isso quando uma é alterada, só esta é modificada:

const c = { 
    nome: 'Henrique',
    sobrenome: 'Kriguer'
}
const d ={...c};

c.nome = 'João';

console.log(c);
console.log(d);