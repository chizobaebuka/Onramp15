// Given a number n, return the number of positive odd numbers below n,
// Example, 
// oddCount(7) -> 3
// oddCount(15))

function oddCount(n){
   return Math.floor(n/2);
}

// OR

function oddCount(n){
    let newN = Math.floor(n/2);
    if(n%2 === 0){
        return newN -1;
    }else{
        return newN;
    }
}