// para que um conjunto de variáveis sejam protegidas e somente acessados dentro do escopo da função,
// não podemos usar a Classe que foi implementada no EC6 , então a sintaxe deverá ser a do EC5 :

function Carro (){
    var variavelSecreta = "segredo"
    var metodoInterno = function(){
        console.log("só pode ser acessado dentro do objeto")
    }
    this.velocidade = 0
    this.ligado = false
    this.nivelCombustivel = 100
    this.cor;
    
    this.ligar = function(){
        if(this.ligado){
            console.log("O carro já esta ligado")
        }else{
            this.ligado = true
        }
    }
    this.andar = function(){
        console.log(variavelSecreta)
        metodoInterno()
        if(!this.ligado){
            this.ligar()
        }
        this.velocidade = 40
    }
}
let carro = new Carro();
carro.andar();
console.log(carro.velocidade);