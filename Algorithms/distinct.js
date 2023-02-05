// Write a function to get the distinct elements in an array 

function distinctElem(arr){
    let newArr = []

    for (let i=0; i< arr.length; i++){
        let char = arr[i];
        if(!newArr.includes(char)){
            newArr.push(char);
        }
    }
    return newArr;
}

// Write a function to get the distinct elements in an array 
function distinctElem(arr){
    return Array.from [new Set(arr)];
}

// Write a function to get the distinct elements in an array 
function distinctElem(arr){
    let obj = {};

    for (let i=0; i<arr.length; i++){
        let char = arr[i];
        if(obj[char]){
            return obj[char]++
        }else{
            obj[char] = 1;
        }
    }
    return Object.keys(obj)
}
