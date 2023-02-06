// Return the length of the longest word in the provided sentence.

// (“The quick brown fox jumped over the lazy dog”)

// Your response should be a number

function longestWord(sentence){
    let longest = 0;
    words = sentence.split('');

    words.forEach((word) => {
        if (word.length > longest) {
            longest = word.length;
        }
    });
    return longest
}