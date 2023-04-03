function contar() {
    var num = new Number()
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var res = document.getElementById('res')
    if (ini.value == 0) {
    res.innerHTML = 'Impossivel contar'
    } else {
        var soma = ini + Number(pas.value)
    } do {
        res.innerHTML = `${soma}`
        res = soma + ini 
    } while (soma < fim)
}