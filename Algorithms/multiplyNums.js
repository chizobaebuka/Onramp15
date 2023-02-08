// Given a string of numbers seperated by a comma and space, return the product of the numbers.
// multiplyNums("2, 3") --> 6
// multiplyNums("1, 2, 3, 4") --> 24
// multiplyNums("54, 74, 453, 0") --> 0
// multiplyNums("10, -2") --> -20

function multiplyNums(nums){
    // convert the nums to an array 
    let split = [...nums];
    let sum = 1;
    split.map((item) => {
        // get the sum of the and multiply 
        sum *= Number(item)
    });
    return sum;
}

// OR

function multiplyNums(nums){
    arr = nums.split(",");
    let mul = 1;
    for(let i=0; i<arr.length; i++){
        let char = split[i];
        mul *= Number(char);
    }
    return mul;
}

function multiply (nums){
    let arr = nums.split("");
    let product = 1;

    arr.forEach((item) => {
        product *= Number(item);
    })
    return product;
}