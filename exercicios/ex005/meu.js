function adicionar(n) {
    var val = document.getElementById('xnum')
    var tab = document.getElementById('xtab')
    var res = document.getElementById('res')
    if (val.value.length == 0) {
        window.alert('Digite algum valor abaixo')
    } else {
        n = Number(val.value)
        var num = [val]
    }
    for (var c = n;c <=100;c += val) {
        var item = document.createElement('option')
        i = Number(item.value)
        item.text = `Valor ${n} adicionado`
        item.value = `val${c}`
        tab.appendChild(item)
    } if (value == text || val.value.length > 100) {
        var value = tab.value;
        var text = tab.options[tab.selectedIndex].value;
        window.alert('O valor ja foi escrito ou é invalido')
    }
}
function finalizar() {
    var fin = document.getElementById('fin')
    fin.innerHTML = `Ao todo, temos ${num} números cadastrados`
    
}    res.innerHTML = `Ao todo, temos ${n} números cadastrados`
console.log(`O valor do array é ${n}`)
    console.log(`O vetor tem ${n.length} elemensot/posições`)
    console.log(`O primeiro valor do array é ${n[0]}`)
    console.log(`Ordem crescente ${n.sort()}`)