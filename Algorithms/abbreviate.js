function abbreviate(fullName){
    let wordArr = fullName.split(" ");
    if(wordArr.length === 1){
        return fullName;
    }
    let abbreviation = wordArr[0] + ' ';

    for(let i =1; i<wordArr.length; i++){
        let word = wordArr[i];
        abbreviation += word[0] + '.';
    }

    return abbreviation;
}