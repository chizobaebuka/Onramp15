function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    let pivot = arr[arr.length -1];
    let left = [];
    let right = [];

    for(let i = 0; i<arr.length -1 ; i++){
        let char = arr[i];
        if(char < pivot){
            left.push(char);
        }else{
            right.push(char);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

// OR

