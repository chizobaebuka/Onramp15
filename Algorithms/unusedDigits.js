function unUsedDigits(...arr){
    joinedArr = arr.join('').split("");
    result = [];

    for (i=0; i<10; i++){
        if(!result.includes(i.toString())){
            result.push(i);
        }
    }
    return result.join("");
}