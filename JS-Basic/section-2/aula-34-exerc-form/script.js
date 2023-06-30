function meuEscopo (){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
   
    function recebeEventoForm (evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push( nome.value, sobrenome.value, peso.value, altura.value);
        resultado.innerHTML += `<p>${pessoas}</p>`;

        console.log(pessoas);
    }



    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();