function criaPessoa(nome, sobrenome, altura, peso){
    return{
        nome, 
        sobrenome,

        // GETTER
        get nomecompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //SETTER
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala: function(assunto){
            return `${nome} está ${assunto}.`;
        },
        altura,
        peso,
        imc() {
            const indice = this.peso / (this.altura ** 2);
                return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Henrique', 'Kriguer', 1.79, 83);
p1.nomeCompleto = 'Henrique dev Kriguer'
console.log(p1.imc());
console.log(p1.nomeCompleto);
console.log(p1.nome);