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
 class CarroCorrida extends Carro{
    andar(){
        this.velocidade = 120
    }
 }

 let carro3 = new Carro()
 carro3.andar()
 console.log(carro3.velocidade)


 let carro4 = new CarroCorrida()
 carro4.andar()
 console.log(carro4.velocidade)