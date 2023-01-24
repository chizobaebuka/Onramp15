// Write a function isDivisibleByN that extracts all the values of an array that is divisble by n and extract all the values that are divisble by n


function isDivisbleByN(arr, n){
    const newArr = [];

    arr.forEach((item) => {
        if(item % n === 0 && !newArr.includes(item)){
            newArr.push(item);
        }
    })
}