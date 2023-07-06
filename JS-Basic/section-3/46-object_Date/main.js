const data = new Date();
console.log(data.toString());

// 01/01/1970 TimeStamp unix ou época unix

const treshoras = 60 * 60 * 3 * 1000; // 3 horas em milisegundos
const dataUnix = new Date(0 + treshoras);
console.log(dataUnix.toString());

// o més de janeiro tem indice 0 e dezenbro 11
// outra forma de escrita de data : 

const data1 = new Date(2023, 5,13,9-3,0); // a, m, d, h, M, s, ms
console.log(data1);

// dataString
const data2 = new Date('2023-05-13 09:00:00');
console.log(data2.toString());

// dado uma data, como separar ano, mes, dia ....

const data3 = new Date(1688675292096);
console.log('Dia',data3.getDate());
console.log('Mês',data3.getMonth()); // 0 - jan , 1 fev , 2 mar ...
console.log('Ano',data3.getFullYear());
console.log('Hora',data3.getHours());
console.log('Minutos',data3.getMinutes());
console.log('Segundos',data3.getSeconds());
console.log('miliseg',data3.getMilliseconds());
console.log('Dia semana',data3.getDay());   // 0 - Domingo, 1 - seg ...

console.log(Date.now()); // apresenta o numero de milisegundos do marco zero até a presente data.