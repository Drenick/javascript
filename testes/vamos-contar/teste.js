function contar() {
    var ini = document.getElementById('xinicio')
    var fim = document.getElementById('xfim')
    var passo = document.getElementById('xpasso')
    var res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel de contar'
    } else {
        res.innerHTML = 'Contando... <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Paso invalido!sera considerado como passo 1')
            p = 1
        }
        if (i < f) {
            for(var c = i;c <= f;c += p) {
                res.innerHTML += `${c} `
            }
        }else {
            for(var c = i;c >= f;c -= p) {
                res.innerHTML += `${c} `
            }
        }
        res.innerHTML += `Fim!`
    }
}