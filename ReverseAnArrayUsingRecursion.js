function reverseArrayInPlace(myArray, start=0, end=myArray.length-1) {
    if (start < end) {
        // Swap elements at the start and end indices
        var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

        // Recursively reverse the remaining elements
        reverseArrayInPlace(arr, start + 1, end - 1);
    }
}

const myArray = [1, 2, 3, 4, 5];
console.log("Original Array: " + myArray);



console.log("Reversed Array (In-Place Recursion): " +myArray);
