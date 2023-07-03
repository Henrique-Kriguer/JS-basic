var carro = {}
carro.ligado = true
carro.ligar = function(){
    if(this.ligado){
    console.log("o carro já esta ligado")
    }else{
        this.ligado = true
    }
}
carro.ligar()
