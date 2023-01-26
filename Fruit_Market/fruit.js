const display = document.querySelector('.display');
const mangoDisplay = document.querySelector('#mango-display');
const orangeDisplay = document.querySelector('#orange-display');
const appleDisplay = document.querySelector('#apple-display');
const mangoButton = document.querySelector('#mango-btn');
const orangeButton = document.querySelector('#orange-btn');
const appleButton = document.querySelector('#apple-btn');


let mangoCount = 0;
let orangeCount = 0;
let appleCount = 0;
mangoButton.addEventListener('click', () => {
    mangoCount += 1;
    mangoDisplay.textContent = mangoCount;
    display.textContent += MANGO_ICON;
});
orangeButton.addEventListener('click', () => {
    orangeCount += 1;
    orangeDisplay.textContent = orangeCount;
    display.textContent += ORANGE_ICON;
});

appleButton.addEventListener('click', () => {
    appleCount += 1;
    appleDisplay.textContent = appleCount;
    display.textContent += APPLE_ICON;
});


