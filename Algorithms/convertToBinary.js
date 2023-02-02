function convertToBinary(num){
    let result = "";
    // to show how many times the code runs
    // let count = 0;
    while (num > 0){
        result = (num % 2) + result;
        num = Math.floor(num / 2);
        // count++;
    }
    return result;
}