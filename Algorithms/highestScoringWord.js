
let sentence = "I am wonderfully and fearfully made"

function scoreWord(word){
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let arr = word.split("");
    let score = 0;

    for (let i=0; i<arr.length; i++){
        score += letters.indexOf(word[i] + 1);
    }
    return score;
}

function highestScoringWord(sentence){
    let eachWord = sentence.split(" ");
    let maxScore = 0;
    let max = 0;

    for (let i=0; i<eachWord.length; i++){
        let score = scoreWord(eachWord[i]);
        if(score > maxScore){
            maxScore = score;
            max = i;
        }
    }
    return eachWord[max]
}