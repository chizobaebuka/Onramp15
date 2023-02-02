// Given an array of Number, return the second largest element within the array 

function secondLargest(arr){
    let sorted = arr.sort((a,b) => a - b)
    // let sorted = arr.sort((a,b) => b - a)
    return sorted [sorted.length - 2];
    // return the 2nd index which is the 2nd largest item in the array
    // return sorted[1];
}