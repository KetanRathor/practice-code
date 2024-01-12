const arr= [12,23,34,12,23,45,66,76,90,76];
let uniqueArray = [];

for (let i=0; i<arr.length; i++){
    isDuplicate = false;
   for(let j=0; j<uniqueArray.length; j++){
    if (arr[i] === uniqueArray[j]){
        isDuplicate = true;
        break;
    }

   }
   if(!isDuplicate){
    uniqueArray[uniqueArray.length] = arr[i]
   }
    
}
console.log(uniqueArray);
console.log(uniqueArray.length)


