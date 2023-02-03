// Implement the function replaceDivisible(x, y) which replaces all numbers in an array, x divisible by an integer, y with string “isDivisible”

// ## Examples
// replaceDivisible([2,4,3,6,5], 3) => [2, 4, “isDivisible”, “isDivisible”, 5]  
// replaceDivisible([12,4,3,6,5], 2) => [“isDivisible”, “isDivisible”, 3, “isDivisible”, 5]

function replaceDivisible(x, y){
    let newArr = x.map((item) => {
        if(item % y === 0){
            return "isDivisible"
        }else{
            return item
        }
    })
    return newArr;
}

// OR

function replaceDivisible(x, y){
    let newArr = [];
    for (let i=0; i<x.length; i++){
        
        if(x[i] % y === 0){
            x[i] = "isDivisible"
            newArr.push[x[i]]
        }else {
            newArr.push(x[i]) 
        }
    }
    return newArr;
}