// Write a function to return the number of multiples of a number, that is divisible by the divisor
// function firstMultiplesOf(noOfElements, number, divisor)

function firstMultiplesOf(noOfMultiples, number, divisor){
    let multiples = [];

    if(number % divisor === 0){
        divisor = 1;
    }

    for(let i =0; i <= noOfMultiples; i++){
        let multiple = number * (divisor * (i + 1));
        multiples.push(multiple);
    }
    return multiples;
}