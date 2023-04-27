function numeroPrimo(num) {
    if (num < 2) {
      console.log(`O número ${num} não é primo`);
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        console.log(`O número ${num} não é primo`);
      }
    }
  }
  
  numeroPrimo(27); 
