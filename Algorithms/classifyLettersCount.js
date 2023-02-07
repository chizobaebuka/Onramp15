// Given a word, return the count of vowels and consonants in the word in the object

function classifyLetters(word){
    let allVowels = ["a", "e", "i", "o", "u", "A", "E", "I", "o", "U"];

    let vowels = 0;
    let consonants = 0;

    for(let i = 0; i<word.length; i++){
        let letter = word[i];

        if(allVowels.includes(letter)){
            vowels++
        }else{
            consonants++
        }
    }
    return {vowels: vowels, consonants: consonants}


}
