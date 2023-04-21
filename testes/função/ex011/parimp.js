function ImparPar (num) {
    if (num%2!==0) {
        return `O número é Ímpar`
    } else {
        return `O número é Par`
    }
}
console.log(ImparPar(3))

//Essa eu ja decorei

/*
function fatorial(n) {
    var fator = 
    for (var x = n; x > 1; x--)
    fator *= x

    1 * 4 == 4
    4 * 3 == 12
    12 * 2 == 24
    
    return fator
}

console.log(fatorial(4))

function fatorial(n) {
    if (n == 1) {
        return 1 
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(4))
*/