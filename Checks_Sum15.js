function checks_sum(a,b){
    return (a===15 || b===15 || a+b===15 || Math.abs(a-b)===15);
}
console.log(checks_sum(15,7));
console.log(checks_sum(17,2));
console.log(checks_sum(9,6));
console.log(checks_sum(7,9));