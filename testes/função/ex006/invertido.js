/*
var num = document.getElementById('num')
var res =document.getElementById('res')
function reverseString(str) {
    var splitString = str.split(""); 
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join("");
} 
    return joinArray;
function inverter(){
    if (num == 0) {
        res.innerHTML = 'Invalido'
    } else {
        res.innerHTML = 'invertendo...'
        
    
}
    
}
res.innerHTML = `O seu número invertido é esse ${inverter(str)}`

/*
function inverteNum(num) {
    var inverso = 0;
    while(num != 0)
    {
        inverso = inverso * 10;
        inverso = inverso + num % 10;
        num = Math.trunc(num/10); // Remover casas decimais
    }
    return inverso;
}
console.log(`${inverteNum(123)}`)
*/
var num = [1, 2, 3]
console.log(`${num}`)
var reverso = num.reverse()
console.log(`${reverso}`)
/*
function inverso(num) {
    var splitString = num.split(""); 
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join("");
    return joinArray
}
console.log(`O número  ao contrário é ${inverso(123)}`)
*/
function reverseString(str) {
    var splitString = str.split(""); 
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join(""); 
    return joinArray; 
}
 
reverseString("oi");