function removeDuplicate(arr){
    let result = [];
    for (let i=0; i<arr.length; i++){
        let char = arr[i]
        if(!result.includes(char)){
            result.push(char);
        }
    }
    return result;
}