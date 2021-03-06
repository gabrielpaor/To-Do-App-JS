//selectors
const todoInput = document.querySelector('#todo-input')
const todoButton = document.querySelector('#todo-button')
const todoList = document.querySelector('.todo-list')

//Event Listener
todoButton.addEventListener('click', addTodo);


//functions
function addTodo(event){
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    
    //Todo
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    
    //check button
    const checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('complete-btn');
    todoDiv.appendChild(checkButton);

    //delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);

    //Append to list
    todoList.appendChild(todoDiv);

    //todoInput value clear after submitting
    todoInput.value = "";

    deleteButton.addEventListener("click", () => {
        todoDiv.remove();
    })

    checkButton.addEventListener("click", () => {
        newTodo.classList.toggle('completed');
    })
}
