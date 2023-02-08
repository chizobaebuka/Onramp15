// Question 1 (Difficulty: 5 /10)
// Write a function that takes in an array and returns the sum of all the numbers divisible by 2 and
// 3 in the array.
// Examples
// sum([2, 5, 7, 3]) returns 0
// sum([12, 5, 6, 3]) returns 18
// sum([6]) returns 6
// sum([2, 12, 18]) returns 30

const { FormatColorResetOutlined } = require("@material-ui/icons");

function sumNum(arr){
    let sum = 0;
    arr.forEach((item) => {
        if(item % 2 === 0 && item % 3 === 0){
            sum += item;
        }
    })
    return sum;
}


// Question 2 (Difficulty: 3 /10)
// Write a function that takes in an array and returns all the numbers that are not divisible by 5.
// Examples
// divisible([3, 5, 15]) returns [3]
// divisible([23, 12]) returns [23, 12 ]
// divisible([3, 25]) returns [3]

function divisible(arr){
    numArr = [];

    arr.forEach((item) => {
        if(item % 5 !== 0){
            numArr.push(item);
        }
    });

    return numArr;
}

// Question 3:
// Write a function that takes in an array and returns the count of each unique element in the array.
// Examples
// unique([“java”, “kotlin”, “java”, “java”, “swift“]) returns { “java”: 3, “kotlin”: 1, “swift”: 1 }
// unique([“developer”, “software”, “engineer”, “software”]) returns { “software”: 2, “engineer”: 1,
// “developer”: 1 }
// unique([“dog”, “cat”, “sheep”, “cat”, “sheep“]) returns { “dog”: 1, “cat”: 2, “sheep”: 2 }

function unique(arr){
    let count = {};

    arr.forEach((item) => {
        if(count[item]){
            count[item]++
        }else{
            count[item] = 1
        }
    })
    return count;
}

// Question 4 (Difficulty: 6 /10)
// Write a function that takes in two arrays of numbers and returns the length of the array with the
// highest sum of its elements.
// Examples
// lengthy([3, 5, 1, 7, 9], [11, 31]) returns 2
// lengthy([13, 11, 3, 1], [4, 9, 1]) returns 4
// lengthy([20], [1, 18]) returns 1

function length(arr1, arr2){
    let sumArr1 = arr1.reduce((a,b) => a + b);
    let sumArr2 = arr2.reduce((a,b) => a + b);
    let highestSum = Math.max(sumArr1, sumArr2);
    return highestSum;
}


// Question 5 (Difficulty: 4 /10)
// Write a function that takes in an array of strings and returns the number of strings whose length
// is greater than 3 but less than or equal to 7.
// Examples
// range([“java”, “kotlin”, “javascript”, “php”, “spring”, “closure” ]) returns 4
// range([“os”, “jenkins”, “circleci”, “travis”, “git”, “closure” ]) returns 3
// range([“springboot”, “servlets”]) returns 0

function range(arr){
    let count = 0;
    arr.forEach((item) => {
        if(item.length > 3 && item.length <= 7){
            count++
        }
    })
    return count;
}


// Question 5
// Write a function takes in an array of numbers and returns the numbers that are multiple of 2 or
// 5.
// Examples
// multiples([2, 11, 45]) returns [2, 45]
// multiples([3, 155, 5, 18]) returns [155, 5, 18]
// multiples([3, 7]) returns []

function multiple(arr){
    let result = [];

    arr.forEach((item) => {
        if(item % 2=== 0 || item % 5 === 0){
            result.push(item)
        }
    });
    return result
}

// LAB 1
// Find the elements in an array Y, that are equal to a given variable X. v
// For example…
// elementsEqualToX(Y, X)
// elementsEqualToX(['a' ,'a' ,'b' ,'f' ,'x' ,'y'], 'a') to return ['a', 'a']
// elementsEqualToX(['t' ,'3' ,3 ,3, '5', 'v'], 3) to return [3, 3]
// elementsEqualToX([4, 6, 2, 6, 7, '7'], '7') to return ['7']

function elementsEqualToX(Y, X){
    let result = [];
    Y.forEach((item) => {
        if(item === X){
            result.push(item)
        }
    })
    return result;
}

// LAB 2
// Find the length of the numbers in array A that are divisible by both 2 and 3 , and at the same
// time, greater than 15.
// For example…
// divisible(A)
// divisible([2,3,12,18,42,24]) to return 3
// divisible([100,84,22,37]) to return 1
// divisible([5,8,6,12]) to return 0

function divisble(A){
    let count =0;
    
    A.forEach((item) => {
        if(item%2 === 0 && item %3 === 0 && item > 15){
            count++;
        }
    })
    return count;
}

// LAB 3
// Find the total age of the applicants that applied for this interview from the given record below.
// For example…
// totalAge([{ name: "XYZ", age: 23 }, { name: "ABC", age: 40 }]) to return 63
// totalAge([{ name: "XYZ", age: 34 }, { name: "XYZ", age: 29 }, { name: "XYZ", age: 33 }]) to return
// 96
// totalAge([{ name: "XYZ", age: 66 }, { name: "WER", age: 44 }, { name: "AZX", age: 22 }]) to
// return 132

function totalAge(record){
    let total = 0;
    record.forEach((person) => {
        total += person.age;
    })
    return total;
}

// LAB 4
// Given an array of objects containing user’s information, assign a default age X for any user that
// did not enter his/her age and return the array.
// checkAge([{ name: "XYZ", age: 23 }, { name: "ABC"}], 33) to return ([{ name: "XYZ", age: 23 }, {
// name: "ABC", age: 33}]
// checkAge([{ name: "XYZ" }, { name: "ASD" }, { name: "CVB", age: 33 }], 55) to return ([{ name:
// "XYZ", age: 55 }, { name: "ASD", age: 55 }, { name: "CVB", age: 33 }]

function checkAge(users, X){
    users.forEach((user) => {
        if(!('age' in user)){
            user.age = X;
        }
    })
    return users;
}

// LAB5
// Find the sum of all the ages in an array of objects
// For example;
// [
// {name: ‘Uche Egbo’, age: 24, occupation: ‘Trader’},
// {name: ‘Solomon Ogbodo’, age: 30, occupation: ‘Accountant’}
// ]
// to return 54.

function findSum(arr){
    let sum = 0; 
    arr.forEach((person) => {
        sum += person.age;
    });
    return sum;
}

// LAB 6
// Find all the numbers in a string and sum them up
// For Example;
// expect(‘1weudh56jdnbfskjn788sdhkfbs90’) to return (935)
function sumStringNum(str){
    let numbers = str.match(/\d+/g) || [];
    return numbers.reduce((sum, b) => sum + parseInt(b), 0);
}

// LAB7
// Return all the unique values in an array as another array in a sorted order.
// For example;
// uniques([2,4,5,4,3,2,5,6,6,7,7,9,1,2,3,5]) will return [1,2,3,4,5,6,7,9];

function uniqueArr(arr){
    return [...new Set(arr).sort((a,b) => a - b)]
}

// Return True or False if a word is a Palindrome
// Hint: a palindrome is a word that can be spelt backwards and looks the same.
// Not case sensitive
// For example;
// isPalindrome(‘madam’) to return true
// isPalindrome(‘decagon’) to return false

function isPalindrome(str){
    let reverseStr = str.toLowerCase().split("").reverse().join("")

    if(str.toLowerCase() === reverseStr){
        return true;
    }else{
        return false;
    }
}

// LAB11
// Extract all the values of an array that are divisible by n
// For example;
// isDivisbleByN([1,3,5,6,3,6,7,4], 2) to return [4, 6]

function isDivisbleByN(arr, n){
    let result = [];
    arr.forEach((item) => {
        if(item % n === 0){
            result.push(item)
        }
    });
    return result;
}

// LAB 12
// You are given an array of player objects for a competition of several games.
// let register = [
// {name: ‘Tolu’, age: 54, game:’Chess’},
// {name: ‘Ikenna’, age: 19, game:’Catch’},
// {name: ‘Adammu’, age: 78, game:’FuzzBuzz’},
// {name: ‘David’, age: 23, game:’Chess’}
// ]
// Write a function that:
// Extract all the names of the players from the given array of user objects and return an array of
// names
// For example;
// playerNames(register) to return [‘Tolu’, ‘Ikenna’,’Adammu’,’David’]

function playerNames(register){
    let result = [];
    register.forEach((player) => {
        if(('name' in player)){
            result.push(player.name)
        }
    })
    return result;
}

// LAB 13
// You are given an array of player objects for a competition of several games.
// let register = [
// {name: ‘Tolu’, age: 54, game:’Chess’},
// {name: ‘Ikenna’, age: 19, game:’Catch’},
// {name: ‘Adammu’, age: 78, game:’FuzzBuzz’},
// {name: ‘David’, age: 23, game:’Chess’}
// ]
// Write a function that:
// Return only names of players of a particular game
// Note: inputs are not case sensitive
// For example:
// playerNames(register, ‘Chess’) to return [‘Tolu’, ‘David’]
// playerNames(register, ‘chess’) to return [‘Tolu’, ‘David’]

function playerNames(register, game){
    let result = [];
    register.forEach((player) => {
        if(('game' in player) && player.game.toLowerCase() === game.toLowerCase()){
            result.push(player.name)
        }
    })
    return result;
}

// LAB 14
// You are given a string of numbers and characters separated by commas (,).
// For example: ‘2,g,65,e,3,7,5,g,3’
// Find the total sum of the numbers in the given string
// For example:
// sumNumbers(‘2,g,65,e,3,7,5,g,3’) => 85

function sumNum(str){
    let sum = 0;
    let parts = str.split(",");

    parts.forEach((part) => {
        if(!isNaN(part)){
            sum += Number(part)
        }
    })
    return sum;
}

// LAB 15
// Given two arrays, return the sum of all positive non-zero results when arr1[i] is subtracted from
// arr2[i].
// For example:
// totalPositiveSum([2, 5, 1, 0, 5, 7], [2, 3, 5, 6, 2, 1]) => 11
// Explanation:
// 2 - 2 = 0
// 5 - 3 = 2
// 1 - 5 = -4
// 0 - 6 = -6
// 5 - 2 = 3
// 7 - 1 = 6
// Sum = 2 + 3 + 6 = 1

