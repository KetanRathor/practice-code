function findFactorial(num) {
    if (num === 0) return ;
    let factorial = num * findFactorial(num - 1)
    return factorial;
  }
  
 let  fact = findFactorial(5);
 console.log(fact);