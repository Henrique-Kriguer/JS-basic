var carro = {}
carro.velocidade = 0
carro.ligado = false
carro.nivelCombustivel = 100
carro.qtdPortas = 4
carro.combustivel = "flex"
carro.cor = "vermelho"

carro.ligar = function(){
    console.log("carro ligado")
}

console.log (carro)
carro.ligar()