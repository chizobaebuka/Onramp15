// Create a function called encode to replace all the lowercase vowels in  given string with numbers according to the following patter

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

// For example, encode(hello) would return 'h2ll4'. Theres no need to worry about uppercase vowels

function encode(word){
    let word = word.split("");
    let result = [];

    for(let char of word){
        if (char === 'a'){
            result.push(1);
        }else if (char === 'e'){
            result.push(2);
        }else if (char === 'i'){
            result.push(3)
        }else if (char === 'u'){
            result.push(4);
        }else{
            result.push(5)
        }
    }
    return result.join("");
}