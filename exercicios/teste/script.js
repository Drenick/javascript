function contar() {
    var ini = document.getElementById('xinicio')
    var fim = document.getElementById('xfim')
    var pas = document.getElementById('xpasso')
    var res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML = `Contando...`
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if (p <= 0) {
            window.alert('Passo inválido! Será considerado como passo 1')
            p = 1
        }
        if (i < f) {
            for(var c = i;c <= f;c += p) {
                res.innerHTML += `${c} `
            }
        } else {
            for (var c = i;c >= f;c-=f) {
            res.innerHTML += `${c} `
            }
        }
        res.innerHTML = 'FIM!'
    }
}