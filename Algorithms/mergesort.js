// Split a given array into two until each of the array becomes an array of 1 element which is always sorted

const array = [2, ,5, 6, 1, 3, 7, 9, 8]

const merge = (left, right) => {
    let result = [];
    while (left.length > 0 && right.length > 0){
        // if the first element in the left array is less than the first element in the right array
        if(left[0] < right[0]){
            // push the first item that has been shifted(returns the element to the front of the array)the left hand side
            result.push(left.shift[0]);
        }else{
            result.push(right.shift[0]);
        }
    }
    return [...result, ...left, ...right]
}

const mergeSort = (arr) => {
    if(arr.length <= 1 ){
        return arr
    }
    let mid = Math.floor((arr.length) / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid + 1 , arr.length -1);
    return merge(mergeSort(left), mergeSort(right))
}