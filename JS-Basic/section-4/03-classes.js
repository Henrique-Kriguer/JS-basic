class Carro{
    velocidade = 0
    ligado = false
    nivelCombustivel = 100
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

let carro1 = new Carro()
let carro2 = new Carro()

carro1.andar()
console.log(carro1.ligado)
console.log(carro1.velocidade)

console.log(carro2.ligado)
console.log(carro2.velocidade)

