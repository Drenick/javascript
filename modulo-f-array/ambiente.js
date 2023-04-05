var num = [7,2,5,9,3]
num.push(6)
console.log(`O valor do array é ${num}`)
console.log(`O vetor tem ${num.length} elemensot/posições`)
console.log(`O primeiro valor do array é ${num[0]}`)
console.log(`Ordem crescente ${num.sort()}`)
var pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}
