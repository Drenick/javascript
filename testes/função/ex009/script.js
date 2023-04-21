var fatorial = document.getElementById('fatorial')
var res = document.getElementById('res')
function calcular(fat) {
    var fator = 1
    for(let x = fat; x > 1;x--) {
        
        fator *= x
        return fator
    } if (fatorial.value.length == 0) {
        res.innerHTML = '[ERRO] Coloque o número acima'
    } else {
        var fat = Number(fatorial.value)
        res.innerHTML = `O fatorial do seu número é ${calcular(fator)}`
    }
    
}