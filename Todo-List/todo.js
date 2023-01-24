let todos = [
    {id: 1, content: "sample todo", createdDate: new Date().toDateString() },
    {id: 2, content: "I want to eat", createdDate: new Date().toDateString() },
    {id: 3, content: "build a todo list app", createdDate: new Date().toDateString() },
];


window.addEventListener('load', () => {
    for (let todo of todos){
        appendTodo(todos[0])
    }
});
const container = document.querySelector('#container');
const inputBox = document.querySelector('#input');
const addButton = document.querySelector('#add');

inputBox.addEventListener('keyup', (Event) => {
    let content = inputBox.value.trim();
    if(!content){
        alert('input Box is empty');
        return;
    }
    if(Event.keyCode === 13){
        addTodo(content);
        inputBox.value = "";
    }
})

addButton.addEventListener('click', () => {
    let content = inputBox.value.trim();
    if (!content){
        alert('input box is empty');
        return
    }

    addTodo(content);
    inputBox.value = '';
})

function appendTodo(todo) {
    let div = document.createElement('div');
    // adding an attribute of class(todo) to the div which was created
    div.setAttribute('class', 'todo');
    // create p element
    let p = document.createElement('p');
    // setting the innerText of the p task to be set to the content of the todos object 
    p.innerText = todo.content;
    // create an innerDiv
    let innerDiv = document.createElement('div');
    // create sub paragraph
    let subParagraph = document.createElement('p');
    // setting the innerText of the subParagraph task to be set to the date of the todos object 
    subParagraph.innerText = todo.createdDate;
    // create img element
    let deleteIcon = document.createElement('img');
    // setting attribute for the img element based off the id of the todos array(todo.id)
    deleteIcon.setAttribute('id', 'delete-' + todo.id);
    // setting the class attribute for the img element
    deleteIcon.setAttribute('class', 'clickable');
    deleteIcon.setAttribute('src', '/Onramp15/Todo-List/delete.png');

    deleteIcon.addEventListener('click', () => {
        deleteTodo(todo.id);
    })

    innerDiv.appendChild(subParagraph);
    innerDiv.appendChild(deleteIcon);

    div.appendChild(p);
    div.appendChild(innerDiv);

    container.appendChild(div);
}

function addTodo(content){
    const newTodo = {
        id : todos[todos.length - 1].id + 1,
        content: content,
        createdDate: new Date.toDateString()
    };
    todos.push(newTodo);
    appendTodo(newTodo);
}

function deleteTodo(id){
    todos = todos.filter((todo) => todo.id !== id);
    container.innerHTML = null;
    for (let todo of todos){
        appendTodo(todo);
    };
}



