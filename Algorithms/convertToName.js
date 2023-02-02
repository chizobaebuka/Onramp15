// You have an array of user objects, each one has user.name. Write a function that converts it into an array of names. For instance: 
// let john = {name: "John", age: 25}
// let peter = {name: "Peter", age: 30}
// let mary = {name: "Mary", age: 30}
// let users = [John, peter, mary];

function convertToName (arr){
    return arr.map((item) => {
        // returns the name of each item in the arr
        return item.name;
    });
}