// Implement a function countTruthy(arr) that takes an array and returns the number of truthy values

// countTruthy([6, 3, 0, 30, 7]) to return 4 countTruthy(['', 3, 0, 30, 7]) to return 3 countTruthy(['', 0, 0, undefined, 7]) to return 1

function countTruthy (arr){
    let count = 0;
    for (let value of arr){
        if(value) count++;
    }
    return count;
}

