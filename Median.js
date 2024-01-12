const arr1 = [5,6,4,10,1];
const arr2 = [15,18,7,2,21];
const mergedArr = arr1.concat(arr2);
console.log("Merged Array :" +mergedArr);
mergedArr.sort(function(a,b){
    return a- b;
})
console.log("Sorted array : " +mergedArr);

let length = mergedArr.length;
let median;
if(length%2==0)
{
    median1 = mergedArr[length/2-1];
    median2 = mergedArr[length/2];
    median = (median1+median2)/2;

}
else{
    median= mergedArr[Math.floor(length/2)];

}
console.log("median : "+ median);
