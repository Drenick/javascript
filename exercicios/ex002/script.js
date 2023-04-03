function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('xano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[EROO] verifique se os espaços foram preenchidos.')
    } else {
        var sex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/crianca.png')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-masc.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'imagens/adulto_masc.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso_masc.png')
            }
        } else if (sex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/crianca_fem.png')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'imagens/adolescente_fem.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'imagens/adulta_fem.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosa_fem.png')
            }
        }
        res.innerHTML = `${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}