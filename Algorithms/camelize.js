// Write a function camelize(str) that changes dash-seperated words like "my-short-string" into Camel cased words "myShortString"
// examples: 
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage'
// camelize("-webkit-transition") == "webkitTransition"

// Steps to solution:
// 1. create a function and pass in an argument (str)
// 2. change the given str to an array by making use of (.split("")) method.
// 3. The array splitStr is sliced starting from the second element, using the slice() method, and stored in the variable sliceStr.
// 4. The variable result is declared as an empty array. Then, a for loop is used to iterate over each word in sliceStr. For each word, the first letter is converted to uppercase using charAt(0).toUpperCase(), the rest of the word is retrieved using slice(1), and the two parts are concatenated. The resulting string is pushed to the result array.
// 5. The result array is joined into a single string using the join() method with an empty separator. The resulting string is stored in the variable ans.
// 6. The first word of splitStr is concatenated with the string ans to form the final result. The final result is returned by the function.

function camelize(str){
    let splitStr = str.split("-");
    let sliceStr = splitStr.slice(1);
    let result = [];
    for(let item of sliceStr){
        result.push(item.charAt(0).toUpperCase() + item.slice(1))
    }
    const ans = result.join("");
    return splitStr[0] + ans;
}