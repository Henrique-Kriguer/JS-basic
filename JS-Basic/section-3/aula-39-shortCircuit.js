console.log('Henrique'&&true&&'kriguer');

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log( a || b|| c || d || e);
// retorna o unico valor true das variáveis, pois a string com a palavra false não é valor false !
// se estivesse sem aspas, retornaria o ultimo elemento falos, no caso NaN;

