// const { TimerSharp } = require("@material-ui/icons")

// Repeat a given String(first argument) for num(second argument) TimerSharp. Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method

function repeatString (str, num){
    if (num < 0) return "";
    let repeated = "";

    for (i=1; i<num; i++){
        repeated += str;
    }
    return repeated;
}

// OR

function repeatString(str, num){
    return str.repeat(num);
}

// OR

function repeatString(str, num){
    if (num < 0) return "";
    let repeated = "";

    while (num > 0){
        repeated += str;
        num--
    }
    return repeated;
}