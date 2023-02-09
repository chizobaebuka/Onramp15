// Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

function decode(inputWord){
    let word = inputWord.split("");
    let result = [];

    for (let char of word){
        if(char === '1'){
            result.push('a');
        }else if (char === '2'){
            result.push('e');
        }else if (char === '3'){
            result.push('i');
        }else if (char === '4'){
            result.push('o');
        }else{
            result.push('u');
        }
    }
    return result.join("");
}