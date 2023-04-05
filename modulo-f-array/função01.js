function parimp(n) {
    if (n%2==0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}
var num = 14
var res = parimp(num)
console.log(`O numero ${num} é ${res}`)
//console.log(parimp(num))