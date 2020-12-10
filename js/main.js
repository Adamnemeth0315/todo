'use strict';

const todoForm = document.querySelector('.input__form');
const todoInput = document.querySelector('.input');
const addButton = document.querySelector('.addBtn');
const todoItems = document.querySelector('.todo__ul');
const chill = document.querySelector('.chill__box');
let todoList = [];
let completeTodoList= [];

(function getDate() {
    const date = document.querySelector('.date');
    const dateNow = new Date();
    date.textContent = dateNow.toLocaleDateString('hu');
})();

todoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addTodo(todoInput.value);
});

const addTodo = (item) => {
    if (item !== "") {
        const todo = {
            name : item,
            complete : false,
        }
        todoList.push(todo);
        addToLocaleStorages(todos);
        todoInput.value = '' ;
    }
}

const addToLocaleStorages = () => {
    
}


/*<ul class="todo__ul">
                <li>
                    <input class="todo__checkbox" type="checkbox">
                    Valami teszt.
                    <button class="deleteBtn">delete</button>
                </li>
            </ul>*/


//Törlés gomb hozzáadása az li-hez. 
/*const liItems = document.querySelectorAll('.li');
const giveDeleteButtonToLiItem = () => {
    for (let i = 0; i < liItems.length; i++) {
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa fa-trash-alt"></i>';
        deleteButton.className = 'deleteBtn';
        liItems[i].appendChild(deleteButton);
    }
}*/

const makeAnLiItem = () => {
    const liItems = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    liItems.appendChild(checkbox);
}

const addTodoToTheList = makeAnLiItem => {
    const liItems = document.createElement('li');
    liItems.textContent = todoInput.value;
    todoItems.style.display = 'flex';
    chill.style.display = 'none';
    todoItems.appendChild(liItems);
}

addButton.addEventListener('click', addTodoToTheList);
addButton.addEventListener('click', function () {
    todoInput.value = '';
});
