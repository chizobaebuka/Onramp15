const span = document.getElementById("counter");
const btnInc = document.getElementById("increment");
const btnDec = document.getElementById("decrement");


let count = 0;

function incrementCount(){
    count++;
    span.textContent = count;
}
function decrementCount(){
    count--;
    span.textContent = count;
}


btnInc.addEventListener("click", incrementCount);
btnDec.addEventListener("click", decrementCount);


