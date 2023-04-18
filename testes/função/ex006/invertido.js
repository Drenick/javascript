/*
var num = document.getElementById('num')
let numeros = []
var res =document.getElementById('res')
function inverter(){
    if (numeros == 0) {
        res.innerHTML = 'Invalido'
    } else {
    var splitstring = numeros.split("")
    var reversearray = splitstring.reverse()
    var joinarray = reversearray.join("")
    return joinarray
}
    
}
res.innerHTML = `O seu número invertido é esse ${inverter(str)}`
*/

function inverteNum(num) {
    var inverso = 0;
    while(num != 0)
    {
        inverso = inverso * 10;
        inverso = inverso + num % 10;
        num = Math.trunc(num/10); // Remover casas decimais
    }
    return inverso;
}
console.log(`${inverteNum(123)}`)
