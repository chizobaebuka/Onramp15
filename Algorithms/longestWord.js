// Return the length of the longest word in the provided sentence.

// (“The quick brown fox jumped over the lazy dog”)

// Your response should be a number

function longestWord(sentence){
    let count = 0;
    words = sentence.split('');

    words.forEach((word) => {
        if (word.length > count) {
            return count = word.length;
        }
    });
    return count
}