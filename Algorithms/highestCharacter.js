// Given a sentence, return the character that occurred the highest number of times

function highestCharacter(str){
    let store = {};
    

    for (let char of str){
        let key = char.toLowerCase().trim();
        if (key === "") continue;

        if(key in store){
            store[key]++
        }else{
            store[key] = 1
        }
    }

    const values = Object.values(store);
    const highest = Math.max(...values);
    const keys = Object.keys(store);

    for (let key of keys){
        if (store[key] === highest){
            return key;
        }
    }




}