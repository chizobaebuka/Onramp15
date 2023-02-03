// Given an array, find the index of the given target 

function findTarget(arr, target){
    for (let i=0; i<arr.length; i++){
        if(arr[i] === target){
            return i
        }
    }
    return -1;
}

// OR
function findTarget(arr, target){
    return arr.indexOf(target);
}

// OR

function binarySearch (arr, target, start, end){
    if(start > end){
        return -1;
    }
    let mid = Math.floor((start + end) / 2);
    if(arr[mid] === target){
        return mid
    }else if(arr[mid] > target){
        return binarySearch(arr, target, start, mid -1)
    }else {
        return binarySearch(arr, target, mid+1, end)
    }
}

const recursiveBinarySearch = (arr, target) => {
    return binarySearch(arr, target, 0, arr.length -1)
}

function smallAndLarge (arr){
    let sorted = arr.sort((a,b) => a -b)
    let secondSmallest = sorted [1];
    let secondLargest = sorted [i - 2]
    
    newArray = [secondSmallest, secondLargest];
    return newArray;
}

function smallAndLarge(num){
    let newArr = [];
    arr = num.sort((a,b) => a - b)
    return newArr.push(arr[1], arr[i-1]);
}