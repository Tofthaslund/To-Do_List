//Selectors
let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".btn");
let todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector('.filter-todo')

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo)

//Functions

function addTodo(event){
    //Prevent form fromsubmitting
    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton)
    //Check Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton)
    //Append to list
    todoList.appendChild(todoDiv)
    //Clear Todo input value
    todoInput.value="";
}

function deleteCheck(event){
    const item = event.target;
    //Delete todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //Animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }

    //Check mark   
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    } 
}

function filterTodo(event) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch (event.target.value) {
            case "all":
                todo.style.flex = 'flex';
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = "none";
                }
        }
    });
}