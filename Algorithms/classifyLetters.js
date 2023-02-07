// Given a word, return the vowels and consonants in the word in the object

function classifyLetters(word){
    let word = word.toLowerCase();
    const allVowels = ["a", "e", "i", "o", "u"];

    let vowels = [];
    let consonants = [];

    for (let i=0; i<word.length; i++){
        let letter = word[i]

        if(allVowels.includes(letter)){
            vowels.push(letter);
        }else{
            consonants.push(letter);
        }
    }

    return {vowels: vowels, consonants: consonants}
}