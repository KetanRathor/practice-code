// const array1 = [1, 2, 3, 4, 5, 6];
// const array2 = [5, 6, 7, 8, 9];

// const arrayCombined = [...array1, ...array2];
// console.log(arrayCombined);

// let uniqueArray = [];

// for (let i = 0; i < arrayCombined.length; i++) {
//     let isDuplicate = false;

//     for (let j = 0; j < uniqueArray.length; j++) {
//         if (arrayCombined[i] === uniqueArray[j]) {
//             isDuplicate = true;
//             break;
//         }
//     }

//     if (!isDuplicate) {
//         uniqueArray[uniqueArray.length] = arrayCombined[i];
// }
// }


const array3 = [1,[2,3,[10,11]],[4,5]]

function arrayAddition (array){
    let sum = 0

    for(let i=0; i<array.length;i++){
        if(typeof array[i]==="number"){
            array[i]+=sum
        }else{
            arrayAddition(array[i])
            sum+=arrayAddition(array[i])
        }
    }
    return sum
}

console.log(arrayAddition(array3));
