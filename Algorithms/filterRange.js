// Write a function filterRange(arr, a, b) that gets an array arr, that looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// let arr = [5, 3, 8, 11], 
// let filterRange(arr, 1, 4): ans: 3, 1

function filterRange (arr, a, b){
    return arr.filter ((item) => item >= a && item <= b);
}

// OR
function filterRange(arr, a, b){
    return arr.filter(function (item) {
        return item >= a && item <= b;
    });
}