class Carro{
    velocidade = 0
    ligado = false
    nivelCombustivel = 100
    cor;
    constructor(cor){
        console.log("carro criado")
        this.cor = cor
    }
    ligar(){
        if(this.ligado){
            console.log("O carro já esta ligado")
        }else{
            this.ligado = true
        }
    }
    andar(){
        if(!this.ligado){
            this.ligar()
        }
        this.velocidade = 40
    }
}

class CarroQuebrado extends Carro{}

let carro = new CarroQuebrado()

console.log(carro.nivelCombustivel)