//index of array  0          1          2           3
const alunos = [ 'Henrique', 'Simone', 'Francisco','João'];

//console.log(alunos);

// para selecionar um elemento do array inserimos colchetes e o numero do indice :
//console.log(alunos[2]);

// podemos incluir um novo elemento na lista atribuindo a ele um indice livre:

//alunos[5] = 'Dulce';

// podemos substituir um elemento fazendo a atribuição:

//alunos[2] = "Chicão"
//console.log(alunos);

// para obter o tamanho do array ( nro. elementos) usamos length:
//console.log(alunos)
//console.log(alunos.length);
// uma forma de adcionar novos elementos é usando o length como indice:
/*
    alunos[alunos.length] = 'Celso';
    alunos[alunos.length] = 'Dulce';
    alunos[alunos.length] = 'José';
    alunos[alunos.length] = 'Maria';
    alunos[alunos.length] = 'Monica';
    alunos[alunos.length] = 'Marcelo';
    alunos[alunos.length] = 'Leonardo';
    alunos[alunos.length] = 'Luciana';
    console.log(alunos)*/
// outra maneira de incluir (mais facil) é o push :

//alunos.push('Mauricio','Murilo')
//console.log(alunos);
//console.log(alunos.length);

// para inserir um novo elemento no inicio da lista, usamos o unshift:
/*
    alunos.unshift('Fernanda');
    console.log(alunos);
    console.log(alunos.length);
    alunos.unshift('Percival')
    console.log(alunos);
    console.log(alunos.length);*/
// para remover o ultimo elemento do array, usamos pop e o primeiro shift
// e podemos armazenar na variavel o elemento removido:
/*
    const removido = alunos.pop();
    console.log(removido)
    const removido2 = alunos.shift();
    console.log(removido2);
    console.log(alunos)
*/
//Para excluir um elemento do array sem excluir o indice 
/*
    delete alunos[1];
    console.log(alunos)
*/
// Podemos remover uma parte do array, declarando o indice inicial e o final(não incliuido)
// no nosso array alunos temos 4 elementos, podemos pegar o segundo e o terceiro}:
const fatia = alunos.slice(1,3);
console.log(alunos);
console.log(fatia);
// array e um objeto/:
console.log(typeof alunos)