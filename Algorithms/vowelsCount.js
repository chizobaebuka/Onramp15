// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function vowelsCount(str){
    const vowels = 'aeiou';
    const checked = [];
    let count = 0;
    for (let char of n){
        if(vowels.includes(char) && !checked.includes(char)){
            checked.push(char);
            count++;
        }
    }
    return count;
}
let str = "I am a boy"
getCount(str)