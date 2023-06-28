let numero = prompt('Digite um número: ');
numero = Number(numero);
const numeroTitulo = document.getElementById('numero-titulo');

const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = `<p>O número ${numero} + 2 = ${numero + 2}</p>`;
texto2.innerHTML = `<p>O número ${numero} - 2 = ${numero - 2}</p>`;
texto3.innerHTML = `<p>A raiz quadrada do número ${numero} é = ${numero ** (1/2)}</p>`;
texto4.innerHTML = `${numero ** (1/2)} é inteiro : ${Number.isInteger(numero ** (1/2))}</p>`;
texto5.innerHTML = `É NaN :${Number.isNaN(numero ** (1/2))} </p>`;
texto6.innerHTML = `Arredondado para baixo: ${Math.floor(numero)} </p>`;
texto7.innerHTML = `Arredondado para cima: ${Math.ceil(numero)} </p>`;
texto8.innerHTML = `Arredondado com duas casas: ${((numero)).toFixed(2)} </p>`;
