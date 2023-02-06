// Write a function increment that increments the value of val in an array by the given value and return the new array
function increment(arr, value){
    return arr.map((item) => item + value);
}

// OR (in-class solution)

function increment(arr, value){
    const mapped = arr.map((item) => {
        return {
            ["val"]: item.val += value
        };
    });
    return mapped;
}

// OR 
function increment(arr, value){
    let res = [];
    for(let i=0; i<arr.length; i++){
        let char = arr[i];
        res.push({val: char.val + value})
    }
    return res;
}