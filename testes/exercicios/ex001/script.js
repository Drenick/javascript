
function verificar() {
    var passageiro = document.getElementById('pass')
    var assentos = document.getElementById('asse')
    var onibus = document.getElementById('onib')
    var contagem = 0
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
        }
        if (asse > pass) {
            var osobrou = (asse*onib) - pass
            res.innerHTML = `O total de passageiros embarcados são ${pass}, sobrou ${osobrou} assentos disponíveis dentro do ônibus.`          
        } else {
            var fespera = pass - (asse*onib)
            res.innerHTML = `O total de passageiros embarcados são ${pass}, porém os ônibus suportam apenas ${asse} assentos, os outros ${fespera} tripulantes terão que esperar pelos próximos ônibus.`
            }
    }
}

/* COM REPETIÇÃO PORÉM DE MANEIRA NÃO ADEQUADA

function verificar() {
    var passageiro = document.getElementById('pass')
    var assentos = document.getElementById('asse')
    var onibus = document.getElementById('onib')
    var contagem = 0
    var res = document.getElementById('res')
    if (passageiro.value.length == 0 || onibus.value.length == 0) {
        res.innerHTML = 'Preencha os campos acima'
    } else {
        res.innerHTML = 'Contando...'
        var pass = Number(passageiro.value)
        var asse = Number(assentos.value)
        var onib = Number(onibus.value)
        for (var cp = contagem; cp <= pass; cp++) {
            if (pass <= 0) {
                res.innerHTML = 'O ônibus não irá sair sem nenhum passageiro.'
            }
            if (asse > pass) {
                var osobrou = (asse*onib) - pass
                var contando = cp
                res.innerHTML += `A contagem dos passageiros irá começar ${contando}, sobrou ${osobrou} assentos disponíveis dentro do ônibus.`          
            } else {
                var fespera = pass - (asse*onib)
                res.innerHTML += `A contagem dos passageiros irá começar ${cp}, os ${fespera} terão que esperar pelos próximos ônibus.`
            }
        }
    }
}
*/