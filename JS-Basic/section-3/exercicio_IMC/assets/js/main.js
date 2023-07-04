function calculaImc() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const info = [];
    
    function recebeEventoForm(evento) {
        evento.preventDefault();
        const peso = Number(form.querySelector('.peso'));
        const altura = Number(form.querySelector('.altura'));
        const imc = peso / (altura * altura);
        const imcInfo = "";
        if (imc <= 18.5) {
            imcInfo = "Abaixo do Peso.";
        } else if (imc > 18.5 && imc <= 24.9) {
            imcInfo = "Peso normal";
        } else if (imc > 24.9 && imc <= 29.9) {
            imcInfo = "Sobrepeso"
        } else if (imc > 29.9 && imc <= 34.9) {
            imcInfo = "Obesidade grau 1";
        } else if (imc > 34.9 && imc <= 39.9) {
            imcInfo = "Obesidade grau 2";
        } else if (imc > 39.9) {
            imcInfo = "Obesidade grau 3";
        }

        info.push({
            peso: peso,
            altura: altura,
            imc: imc
        });
        console.log(info);
        resultado.innerHTML = `<p>Seu IMC: ${imc} : ${imcInfo}`
    }
    form.addEventListener('submit', recebeEventoForm);
}

calculaImc();