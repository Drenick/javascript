let valores = [9,7,2,5,6,3]

//console.log(valores)

/* jeito ruim
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/
//pos=posição
/*              for(var pos = 0;pos <valores.length; pos++) {
                    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
                }
*/
for(var pos in valores) {
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}