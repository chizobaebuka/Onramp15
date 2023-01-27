// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N)
// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] --> returns 11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21] --> returns 160 (the only even number)

function outliers(integers){
    let evenArr = [];
    let oddArr = [];

    for (let char of integers){
        if(char % 2 === 0){
            evenArr.push(char)
        }else{
            oddArr.push(char)
        }
    }
    return oddArr.length === 1 ? oddArr[0] : evenArr[1];
}

