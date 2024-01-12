function is_even_Number(num){
if(num<0){
    num = Math.abs(num);
}
if(num===0){
    return true;
}
if(num===1){
    return false;
}
else {
    num = num-2;
    return is_even_Number(num);
}

}
console.log(is_even_Number(3));
console.log(is_even_Number(4));
console.log(is_even_Number(500));
console.log(is_even_Number(1));
console.log(is_even_Number(-8));
console.log(is_even_Number(0));