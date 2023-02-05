// Write a function isDivisibleByN that extracts all the values of an array that is divisble by n 


function isDivisibleByN(arr, n){
    const newArr = [];

    arr.forEach((item) => {
        if (item % n === 0 && !newArr.includes(item) && item !== 0){
            newArr.push(item)
        }
    })

    if(newArr.length === 0){
        return 0;
    }

    return newArr;
}

// OR

function isDivisibleByN(arr, n){
    return arr.filter((item) => item % n === 0);
}


// Implement a function which multiplies two numbers. 
// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. FIrst argument is an array of numbers and the second is the divisor.

function divisibleByN(arr, n){
    result = [];

    arr.forEach((item) => {
        if(item % n === 0){
            result.push(item);
        }
    })
    return result;
}