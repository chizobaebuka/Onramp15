// Write a function that returns the sum of the length of all words greater than a minimum value in an array.

// allSum(words, min)
// Parameters
// words: Array<String> - The words to sum up their length.

// min: Number - The minimum length of each word before its length should be summed.

// Return Value
// Number - The sum of all length of words greater than the minimum

function allSum (words, min){
    return words.reduce((sum, word) => {
        if(word.length > min){
            sum += word.length;
        }
        return sum;
    }, 0);
}

// OR

function allSum(words, min) {
    if (words.length < min) {
      return 0;
    }
    return words.reduce((acc, word) => acc + word.length, 0);
}