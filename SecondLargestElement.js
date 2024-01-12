const arr = [12,3,10,23,45,43,65];
let largestElement = arr[0];
let secondlargest = null;

for(let i=1;i<arr.length; i++){
    let currentElement = arr[i];
    if (currentElement>largestElement){
       
        secondlargest = largestElement;
        largestElement = currentElement;
        
       
    }
    else if (currentElement<largestElement && currentElement>secondlargest){
       secondlargest = currentElement;
    }
    
}
console.log(secondlargest);
console.log(largestElement);