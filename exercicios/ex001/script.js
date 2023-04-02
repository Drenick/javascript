function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora < 12) {
        //dia
        img.src = 'imagens/manha.jpeg'
        document.body.style.background = '#66BCF9'
    } else if (hora >= 12 && hora < 18) {
        //tarde
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#F57802'
    } else {
        //noite
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#9A7DB5'
    }
}
