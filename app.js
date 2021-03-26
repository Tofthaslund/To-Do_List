//Selectors
let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".btn");
let todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener('click', addTodo);

//Functions

function addTodo(event){
    //Prevent form fromsubmitting
    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey there';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    
};