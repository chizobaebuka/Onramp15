function convertToDecimal(binary){
    let result = 0;
    
    for(let i= 0; i<binary.length; i++){
        result += binary[i] * Math.pow(2, binary.length - i - 1)
    }
    return result;
}

// OR
function convertToDecimal(binary){
    return parseInt(binary, 2);
}