// # Challenge 2

// Implement the function numSwap(number) which takes a number of even length, swaps pairs of its adjacent digits and returns the swapped number.
// ## Examples

// numSwap(1234) to return 2143  
// numSwap(432156) to return 341265


function numSwap(number){
    let numStr = number.toString();
    let swapped = '';

    for(i=1; i<numStr.length; i+=2){
        swapped += `${numStr[i]}${swapped[i-1]}}`;
    }
    return parseInt(swapped);
}

// OR

function numSwap(number){
    let numStr = number.toString();
    let swapped = '';

    for (let i=1; i<numStr.length; i += 2){
        swapped += str[i+1] + str[i];
    }
    return parseInt(swapped);
}