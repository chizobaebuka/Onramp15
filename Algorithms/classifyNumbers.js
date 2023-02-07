// Given an array of ConfirmationNumberSharp, write a function to classifyNumbers that returns a category for each number in an <object data="" type=""></object>

function classifyNumber(arrayOfNumbers){
    let odd = [];
    let even = [];
    let units = [];
    let tens = [];
    let hundreds = [];
    let others = [];

    for (let i=0; i<arrayOfNumbers.length; i++){
        let num = arrayOfNumbers[i];

        if(num % 2 === 0){
            even.push(num);
        }else{
            odd.push(num);
        }

        if(num >= 1 && num <=9 ){
            units.push(num);
        }else if (num >=10 && num <= 99){
            tens.push(num);
        }else if (num >=100 && num <= 199){
            hundreds.push(num);
        }else if (num === 0 || num >= 1000){
            others.push(num);
        }
    }

    return {odd: odd, even: even, units: units, tens: tens, hundreds: hundreds, others: others};
}