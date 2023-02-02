// Create a function unique(arr) that should return an array with unique items of arr. Let strings = ["Tosin", "Tobi", "Tosin", "Femi", "Tosin", "Tobi"]

function unique(arr){
    return [...new Set(arr)];
}