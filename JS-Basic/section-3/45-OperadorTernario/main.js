// usando estrutura condicional:
const pontosUser = 100;
if (pontosUser >=1000) {
    console.log('usuário VIP');
} else{
    console.log('usuário normal');
}
// Usando a estrutura ternária:

const nivelUser = pontosUser >= 1000 ? 'usuário VIP' : 'usuário normal';
console.log(nivelUser);


// Usando estrutura ternária associada ao operador 'ou'
// vemos aqui que se o usuário não selecionou uma cor, a cor a ser aplicada é a preta (padrão):
const corUsuario = null;
const corPadrao = corUsuario || 'Preta';



