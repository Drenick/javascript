function imparpar(num) {
    if (num%2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}
var n = 8
var res = imparpar(n)
console.log(`o resultado é ${n} é ${res}`)