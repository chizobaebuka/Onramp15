// INSTRUCTIONS: Your task is to write HTML and JS code that will display the current value of an integer number counter
// The Counter should start at 0
// There should be a button to add even numbers to the counters value
// There should be a button to subtract odd numbers from the counters value
// The counters value display should be rendered when the value changes

// The code should render the following HTML elements
// The counter display element with a class of .counter, containing the counter value
// An increment button with a class of .increment
// An decrement button with a class of .decrement

let btnInc = document.querySelector(".increment");
let btnDec = document.querySelector(".decrement");
let counter = document.querySelector(".counter");

btnInc.addEventListener('click', increment);
btnDec.addEventListener('click', decrement);

function increment(){
    return counter.textContent ++;
}
function decrement(){
    return counter.textContent --;
}
