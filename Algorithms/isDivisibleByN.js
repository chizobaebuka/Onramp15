// Write a function isDivisibleByN that extracts all the values of an array that is divisble by n and extract all the values that are divisble by n


function isDivisbleByN(arr, n){
    const newArr = [];

    arr.forEach((item) => {
        if (item % n === 0 && !newArr.includes(item) && num !== 0){
            newArr.push(item)
        }
    })

    if(newArr.length === 0){
        return 0;
    }

    return newArr;
}

