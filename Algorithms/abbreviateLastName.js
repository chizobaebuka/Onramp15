function abbreviate(lastName){
    let wordArr = lastName.split(" ");

    if(wordArr.length === 1){
        return lastName;
    }

    let abbreviation = "";
    for(let i=0; i < wordArr.length -1; i++){
        const word = wordArr[i];
        abbreviation += word[0] + ".";
    }

    return abbreviation + " " + wordArr[wordArr.length -1]
}