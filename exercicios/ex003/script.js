function contar() {
    var ini = document.getElementById('xinicio')
    var fim = document.getElementById('xfim')
    var passo = document.getElementById('xpasso')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar'
        //window.alert('Impossivel contar [FALTAM DADOS]')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <=0) {
            window.alert('Passo inválido! Será considerado como passo 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for(let c = i;c <= f;c = c += p) {
                res.innerHTML += `${c} \u{02192}`
            }
        } else {
            //contagem decrescente
            for(let c = i; c>= f;c = c -= p) {
                res.innerHTML += `${c} \u{02192}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    } 
}
