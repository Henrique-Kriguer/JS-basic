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

let carro = new Carro()
let carro1 = new Carro()

console.log(typeof carro1)
carro1.andar();
console.log(carro1.velocidade)

let carro2 = Object.create(carro)

console.log(carro2.velocidade)
