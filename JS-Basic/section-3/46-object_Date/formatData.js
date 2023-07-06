const data = new Date();
console.log(data);

function formataData(data){
    const dia = zeroAesq(data.getDate());
    const mes = zeroAesq(data.getMonth()+1);
    const ano = data.getFullYear();
    const hora = zeroAesq(data.getHours());
    const minuto = zeroAesq(data.getMinutes());
    const segundo = zeroAesq(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}

const dataBrasil = formataData(data);
console.log(dataBrasil);

function zeroAesq (num) {
    return num >= 10 ? num : `0${num}`;
}