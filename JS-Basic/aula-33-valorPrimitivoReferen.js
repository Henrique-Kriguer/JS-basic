// as variaveis a e b apontam para o mesmo local na memória, por isso quando uma é alterada, ambas são:

const a = { 
    nome: 'Henrique',
    sobrenome: 'Kriguer'
}
const b = a;

b.nome = 'João';

console.log(a);
console.log(b);

// as variaveis a e b NÃO apontam para o mesmo local na memória, por isso quando uma é alterada, só esta é modificada:

const c = { 
    nome: 'Henrique',
    sobrenome: 'Kriguer'
}
const d ={...c};

c.nome = 'João';

console.log(c);
console.log(d);