// Implement a function sumMix(arr) that given an array of integers as strings and numbers, returns the sum of the array values as if all were numbers.

function sumMixArray(arr){
    arr.reduce((a,b) => Number(a) + Number(b))
}