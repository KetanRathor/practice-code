// const arr1 = [[1,2],[1,5,6],[3,2,5],[4,6]];
// const arr2 = [[7,10,11],[1,5,6],[25,10],[10,100,11]];
// const arr3 =[];
// for(let i =0; i<arr1.length; i++){
//     for(let x =0; x<arr1[i].length; x++){
//         for(let j = 0; j<arr2.length; j++){
//             for(let k= 0; k<arr2[k].length; k++){
//                 if(arr1[i][x]===arr2[j][k]){
//                     arr3.push(arr1[i]);

//                 }
//             }
//         }
//     }
    
// }
// console.log(arr3);
    
// const arr1 = [[1, 2], [1, 5, 6], [3, 2, 5], [4, 6]];
// const arr2 = [[7, 10, 11], [1, 5, 6], [25, 10], [10, 100, 11]];

// const arr3 = [];

// for (let i = 0; i < arr1.length; i++) {
//     for (let x = 0; x < arr1[i].length; x++) {
//         // Logic to compare elements in arr1 and arr2
//         for (let j = 0; j < arr2.length; j++) {
//             for (let k = 0; k < arr2[j].length; k++) {
//                 if (arr1[i][x] === arr2[j][k]) {
//                     arr3.push(arr1[i]);
//                 }
//             }
//         }
//     }
// }

// console.log(arr3);


// const arr1 = [[1, 2], [1, 5, 6], [3, 2, 5], [4, 6]];
// const arr2 = [[7, 10, 11], [1, 5, 6], [25, 10], [10, 100, 11]];

// const arr3 = [];

// for (let i = 0; i < arr1.length; i++) {
//     let hasCommonElements = false;

//     for (let x = 0; x < arr1[i].length; x++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr2[j].includes(arr1[i][x])) {
//                 hasCommonElements = true;
//                 break;
//             }
//         }

//         if (hasCommonElements) {
//             break;
//         }
//     }

//     if (!hasCommonElements) {
//         arr3.push(arr1[i]);
//     }
// }

// console.log(arr3);


// const arr1 = [[1, 2], [1, 5, 6], [3, 2, 5], [4, 6]];
// const arr2 = [[7, 10, 11], [1, 5, 6], [25, 10], [10, 100, 11]];

// const mergedArr = arr1.concat(arr2);
// console.log(mergedArr);

// const uniqueArray = [];

// for (let i = 0; i < mergedArr.length; i++) {
//     for(let x=0; x<mergedArr[i].length; x++){
//     let isDuplicate = false;

//     for (let j = 0; j < uniqueArray.length; j++) {
//         if (mergedArr[i]===uniqueArray[j]) {
//             isDuplicate = true;
//             break;
//         }
//     }

//     if (!isDuplicate) {
//         uniqueArray.push([...mergedArr[i]]);
//     }
// }
// }
// console.log(uniqueArray);


// const arr1 = [[1, 2], [1, 5, 6], [3, 2, 5], [4, 6]];
// const arr2 = [[7, 10, 11], [1, 5, 6], [25, 10], [10, 100, 11]];

// const mergedArr = arr1.concat(arr2);
// console.log(mergedArr);

// const uniqueArray = [];

// for (let i = 0; i < mergedArr.length; i++) {
//     let isDuplicate = false;

//     for (let j = 0; j < uniqueArray.length; j++) {
//         if (arraysEqual(mergedArr[i], uniqueArray[j])) {
//             isDuplicate = true;
//             break;
//         }
//     }

//     if (!isDuplicate) {
//         uniqueArray.push([...mergedArr[i]]);
//     }
// }

// function arraysEqual(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }

//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(uniqueArray);


// const arr1 = [[1, 2], [1, 5, 6], [3, 2, 5], [4, 6]];
// const arr2 = [[7, 10, 11], [1, 5, 6], [25, 10], [10, 100, 11]];

// const mergedArr = arr1.concat(arr2);
// console.log(mergedArr);

// const uniqueArray = [];

// for(let i =0; i<mergedArr.length; i++){
//     let isDuplicate = false;
//     for(let j= 0; j<uniqueArray.length; j++){
//         if(mergedArr[i].length === uniqueArray[j].length){
//             let isEqual =true;
//             for(let k = 0; k < mergedArr[i].length; k++){
//                 if(mergedArr[i][k]!== uniqueArray[j][k]){
//                     isEqual=false;
//                     break;
//                 }

//             }
//             if(isEqual){
//                 isDuplicate=true;
//                 uniqueArray.push(...[mergedArr[i]]);
//                 break;
//             }
//         }
//     }
//     if(isDuplicate===false){
//         uniqueArray.push([...mergedArr[i]])
//     }
// }
// console.log(uniqueArray);

// const arr1 = [[1, 2], [1, 5, 6], [3, 2, 5], [10,25],[4, 6]];
// const arr2 = [[7, 10, 11], [1, 5, 6], [25, 10], [10, 100, 11]];

// const duplicateArray = [];

// for(let i=0; i<arr1.length; i++){
//     for(let j=0; j<arr2.length; j++){
//         if(arr1[i].length===arr2[j].length){
//             let isSame=true;
//             for(let k=0; k<arr1[i].length; k++){
//                 if(arr1[i][k]!==arr2[j][k]){
//                     isSame = false;
//                     break;
//                 }

//             }
//             if(isSame){
//                 duplicateArray.push(arr1[i])
//             }
//         }
//     }
// }
// console.log(duplicateArray);


//Using Recursion------------

function findDuplicate(arr1, arr2, i, duplicateArray){
    if(i==arr1.length){
        return;
    }
    const currentSubArray = arr1[i];

    for(let j = 0; j<arr2.length; j++){
        if(currentSubArray.length===arr2[j].length){
            let isSame = true;
            for(let k =0; k<currentSubArray.length;k++){
                if(currentSubArray[k]!== arr2[j][k] ){
                    isSame = false;
                    break;
                }
            }
            if(isSame){
                duplicateArray.push(currentSubArray);
                break;
            }
        }
    }
    findDuplicate(arr1, arr2, i+1, duplicateArray);
}
const arr1 = [[1, 2], [1, 5, 6], [3, 2, 5], [4, 6]];
const arr2 = [[7, 10, 11], [1, 5, 6], [25, 10], [10, 100, 11]];
const duplicateArray= [];
findDuplicate(arr1, arr2, 0, duplicateArray);
console.log(duplicateArray);
