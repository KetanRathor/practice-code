function divisible_by_one(a,b){
    if(!((a%7==0 || a%11==0) && (b%7==0 || b%11==0))){
        return ((a%7==0 || a%11==0) || (b%7==0 || b%11==0));
    }
    else{
        return false;
    }
}

console.log(divisible_by_one(12,11));
console.log(divisible_by_one(21,13));
console.log(divisible_by_one(24,23));
console.log(divisible_by_one(11,21));