// Given a string, remove all numbers from the string and return the removed numbers

function removeNumbers(str){
    let newStr = str.split('').map((item) => item.replace(/[0-9]/g, '')).join('');
    return newStr;
}
