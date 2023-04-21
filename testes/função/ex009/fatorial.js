function fatorial(fat) {
    if (fat == 1) {
        return 1
    } else {
        return fat * fatorial(fat-1)
    }
}
console.log(fatorial(4))
