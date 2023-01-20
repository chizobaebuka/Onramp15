// getElementByClassName
// const paragraphs = document.getElementsByClassName("p");

// for (let i=0; i<paragraphs.length; i++){
    // for each paragraph in the paragraphs that have a class of p, set their new class to red using (setAttribute)
//     paragraphs[i].setAttribute('class', 'red');
// }

// getElementById
// const body = document.getElementById("container");
// console.log(body);

// to create an element
// const h2 = document.createElement("h2");
// to add element to an element
// h2.innerText = "I exist"
// to add element to an parent element or container
// body.appendChild(h2);

// QUERY SELECTOR / QUERY SELECTORALL
// selecting all paragraphs with a class of p ('.p')
// const allParagraphs = document.querySelectorAll('.p');
// console.log("all", allParagraphs);

// selecting the body with an id of container ("#container")
// const body2 = document.querySelector('#container');
// console.log(body2);


// CREATING UL AND embedding li to the ul and then append the ul child to the body element;
// const ul = document.createElement('ul');
// const li = document.createElement('li');
// const li2 = document.createElement('li');
// const li3 = document.createElement('li');

// li.innerText = "I am the first";

// li2.innerText = "I am the second";

// li3.innerText = " I am the third";

// ul.appendChild(li);
// ul.appendChild(li2);
// ul.appendChild(li3);

// body.appendChild(ul);

// EVENTS

const body = document.querySelector("#container");
const button = document.querySelector('#btn');
const header = document.querySelector('h1');
// click & mouseover events
button.addEventListener('click', turnEntirePageYellow);
button.addEventListener('mouseover', turnHeaderToRed);

function turnEntirePageYellow() {
    body.setAttribute("class", "yellow")
}

function turnHeaderToRed() {
    header.setAttribute("class", "red")
}
