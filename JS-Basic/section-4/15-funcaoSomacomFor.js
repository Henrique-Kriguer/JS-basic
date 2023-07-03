function somatoria(){
    let tot = 0;
    for (let argumento of arguments){
        tot += argumento;
    }
    console.log(tot)
}
somatoria(2,3,4,5);