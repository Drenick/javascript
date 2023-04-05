function adicionar(n) {
    var val = document.getElementById('xnum')
    var tab = document.getElementById('xtab')
    if (val.value.length == 0) {
        window.alert('Digite algum valor abaixo')
    } else  {
        n = Number(val.value)
        var num = [val]
    }
    for(var x = n;x <=100;x += val) {
        var item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        item.value = `val${x}`
        tab.appendChild(item)
    }
    if (val.value.length > 100) {
        window.alert('O valor ja foi escrito ou é invalido')
    }
}