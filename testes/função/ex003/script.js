function calcular(F) {
    var f = document.getElementById('fah')
    var res = document.getElementById('res')

    if (f.value.length == 0) {
        res.innerHTML = 'Impossivel contar'
        //window.alert('Impossivel contar [FALTAM DADOS]')
    } else {
        var fah = Number(f.value)
        var celsius = ((fah - 32) * 5/9)
        res.innerHTML = `Celsius ${celsius}`
    }
    
}


//==========================================
/*
var f = 50
var c = (f - 32) * 5/9
console.log(`${f} Graus Fahrenheit são equivalente a ${c} Graus Celsius`)
*/
//==========================================
/*
function converteFparaC(F) {
    var celsius = (F - 32) * 5/9
    return celsius
}

console.log(`${converteFparaC(86)}`)
*/