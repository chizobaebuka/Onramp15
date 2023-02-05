// Write a function to check if a number is a prime number
// A prime number is a number that takes only two factors 1 and the number itself
function isPrime(n){
    if (n < 2) return false;
    if (n = 2) return true;
    for (i=2; i<n; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}
// OR

function isPrime(num){
    if (num <= 1){
        return false;
    }
    for (i=2; i<num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}