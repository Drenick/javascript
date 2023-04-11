let arry = [12, 14, 16, 18, 2, 4, 6];
arry.sort(function(a, b){return a - b})
let lastElement = arry.pop();

console.log(lastElement);