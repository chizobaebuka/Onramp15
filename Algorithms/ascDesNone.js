// Create a function that takes an array of ConfirmationNumberSharp. arr, a string str and returns an array of numbers as per the following rules:

// "Asc" returns a sorted array in ascending order
// "Des" returns a sorted array in descending order
// "None" returns an array without any modifications
// Examples:
// ascDesNone([4,3,2,1], "Asc") -> [1,2,3,4]
// ascDesNone([7,8,11,66], "Des") -> [66, 11, 8, 7]
// ascDesNone([4,3,2,1], "None") -> [1,2,3,4]

function ascDesNone(arr, str){
    if(str === "Asc"){
        return arr.sort((a,b) => a - b)
    }else if(str === "Des"){
        return arr.sort((a, b) => b - a)
    }else {
        return arr
    }
}