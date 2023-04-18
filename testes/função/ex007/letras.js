function QuantasLetras(letras) {
    if (letras == 'a' || letras == 'e' || letras == 'i' || letras == 'o' || letras == 'u') {
        return 'Vogal'
    } else {
        return 'Consoante'  
    }
}
var letra = 'c'
console.log(`${QuantasLetras(letra)}`)
