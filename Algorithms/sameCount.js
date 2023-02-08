// Write a function sameCount to determine if every character in a string appears an equal number of times of every other character. 

// For example, a string such as "akabbk" given as input to sameCount(s) should report true because each character in the string has the same number of repetitions. It should report false for input such as "abcxx" which has an extra "x" character. 

// Note that upper-and-lower cased characters such as "A" and "a" are treated as distinct for the purpose of sameCount.

// String input size is 0 <= n <= 1000

function sameCount(word){
    if(word === ""){
        return true;
    }
    let charCount = {};

    for (let i=0; i<word.length; i++){
        let letter = word[i]

        if(charCount[letter]){
            charCount[letter] = charCount[letter] + 1
        }else{
            charCount[letter] = 1
        }
    }
    let firstLetter = word[0]
    let countFirstLetter = charCount[firstLetter];

    for(let i =0; i<word.length; i++){
        var letter = word[i];

        if(charCount[letter] !== charCount[firstLetter]) {
            return false;
        }
    }
    return true
};