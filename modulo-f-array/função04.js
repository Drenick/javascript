function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1;c--) {
        fat *= c
    }
    return fat
}
console.log(fatorial(5))
/*
c=5 -> 5 > 1 -> 1 *= 5
c=4 -> 4 > 1 -> 5 *= 4
c=3 -> 3 > 1 -> 20 *= 3
c=2 -> 2 > 1 -> 60 *= 2
c=1 -> 1 > 1 ->  fat = 120

5! = 5 x 4 x 3 x 2 x 1

*/