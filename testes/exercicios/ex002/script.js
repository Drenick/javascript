
function verificar() {
    var passageiro = Number(input_pessoas.value)
    var capacidade = Number(input_capacidade.value)
    var contador = 0
    
    for (var x = contador; x < passageiro; x++) {
        if (contador == 1) {
            res.innerHTML += `Entrou o primeiro passageiro <br>` 
        } else if (contador <= capacidade) {
            res.innerHTML +=`Entrou o ${x} passageiro <br>`
        } else {
            res.innerHTML += `O ${contador} passageiro terá que esperar <br>`
        }

    }
}