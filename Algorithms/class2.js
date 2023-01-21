// 3. Given a string, check if its a palindrome. If it is return true else return false
function isPalindrome(string){
    let arr = string.split('');
    let reverseArr = arr.reverse();
    let stringReverse = reverseArr.join('');
    
    if(string === stringReverse){
        return true;
    }else {
        return false;
    }
}

isPalindrome('madam');

// 4. Given a value N, calculate the Factorial of N E.g 4 factorial = 4 * 3 * 2 * 1
function factorial(n) {
    let result = 1;
    for (let i=n; i >= 1; i--){
        result *= n;
    }
}