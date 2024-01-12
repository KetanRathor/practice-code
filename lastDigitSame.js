function last_Digit_Same(a,b,c){

    return (a%10 === b%10)||
    (b%10 === c%10)||
    (a%10 === c%10);
}
console.log(last_Digit_Same(12,102,22));
console.log(last_Digit_Same(33,43,603));
console.log(last_Digit_Same(77,98,900));