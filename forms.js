//variables
let todoList = [];
let listElement = document.createElement('ul');
let body = document.querySelector('body');

document.querySelector('form').addEventListener("submit", function(event){
    event.preventDefault();
    //update To Do List
    todoList.push(document.querySelector('input').value);
    //display To Do List
    let listTemplate = todoList.map(item => `
        <li><p>${item}</p></li>
        `);
    listElement.innerHTML = listTemplate.join('');
    body.appendChild(listElement);
})