// In this kata you will have to transform each string so that it contains count for every symbol it contains, starting from 2. The order of symbols should be preserved.

// Example: abbreviation => a2b2revi2ton


function symbol(str){
    let charCount = {};
    let result = "";

    for (let i=0; i<str.length;i++){
        let char = str[i]
        charCount[char] = charCount[char] + 1 || 2;
    }
    
    for(i=0; i<str.length; i++){
        let char = str[i];

        if(charCount[char] !== charCount[str[i - 1]]){
            result += char + charCount[char];
            charCount[char]=1;
        }else{
            result += char
        }
    }

    return result;
}

