let todos = [
    {id: 1, content: "sample todo", createdDate: new Date().toDateString() },
];


window.addEventListener('load', () => {
    renderTodo(todos[0])
});
const container = document.querySelector('#container');

function renderTodo() {
    let div = document.createElement('div');
    // adding an attribute of class(todo) to the div which was created
    div.setAttribute('class', 'todo');
    // create p element
    let p = document.createElement('p');
    // create an innerdiv
    let innerDiv = document.createElement('div');
    // create sub paragraph
    let subParagraph = document.createElement('p');
    // create img element
    let img = document.createElement('img');
    // setting attribute for the img element based off the id of the todos array(todo.id)
    img.setAttribute('id', 'delete-' + todos.id);

}