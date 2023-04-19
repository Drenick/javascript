
function verificar() {
    var passageiro = document.getElementById('pass')
    var assentos = document.getElementById('asse')
    var onibus = document.getElementById('onib')
    var res = document.getElementById('res')
    if (passageiro.value.length == 0 || onibus.value.length == 0) {
        res.innerHTML = 'Preencha os campos acima'
    } else {
        res.innerHTML = 'Contando...'
        var pass = Number(passageiro.value)
        var asse = Number(assentos.value)
        var onib = Number(onibus.value)
        if (pass <= 0) {
            res.innerHTML = 'O ônibus não irá sair sem nenhum passageiro.'
        } else if (pass > asse) {
            for (var cp = pass; cp <= asse; cp++)
            var fespera = pass - (asse*onib)
            res.innerHTML = `A contagem dos passageiros irá começar ${cp}, os ${fespera} terão que esperar pelos próximos ônibus.`
        } else {
            for (var cp = 1; cp <= asse; cp++)
            var osobrou = (asse*onib) - pass
            res.innerHTML = `A contagem dos passageiros irá começar ${cp}, sobrou ${osobrou} assentos disponíveis dentro do ônibus.`
        }
        
    }
}