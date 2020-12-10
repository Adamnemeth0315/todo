'use strict';

const todoForm = document.querySelector('.input__form');
const todoInput = document.querySelector('.input');
const addButton = document.querySelector('.addBtn');
const todoItems = document.querySelector('.todo__ul');
const chill = document.querySelector('.chill__box');
const date = document.querySelector('.date');
const day = document.querySelector('.day');
const daysName = ['Sunday', 'Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let todoList = [];
let completeTodoList= [];

(function getDate() {
    const dateNow = new Date();
    day.textContent = daysName[dateNow.getDay()];
    date.textContent = dateNow.toLocaleDateString('us');
})();

todoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addTodo(todoInput.value);
});

//LocalStorage kezelő objektum
const localDatabase = {
    setItem(key,value) {
        value = JSON.stringify(value);
    localStorage.setItem(key, value);    
    },
getItem(key) {
    const value = localStorage.getItem(key);
    if (!value){
        return null;
    }
    return JSON.parse(value);
    },
removeItem(key){
    localStorage.removeItem(key);
    }
};

localDatabase.setItem('todoList', todoList);


/*<ul class="todo__ul">
                <li>
                    <input class="todo__checkbox" type="checkbox">
                    <span> ${item.name}</span>
                    <button class="deleteBtn"><i class="fa fa-trash-alt"></i></button>
                </li>
            </ul>*/


let value = todoInput.value;
const pushTodosToTheArray = () => {
    if (value) {
        todoList.push(value);
    }
}

const addTodoToTheList = makeAnLiItem => {
    const liItems = document.createElement('li');
    liItems.innerHTML =  `<input class="todo__checkbox" type="checkbox">
    <span>${todoInput.value}</span>
    <button class="deleteBtn"><i class="fa fa-trash-alt"></i></button>`;
    todoItems.style.display = 'flex';
    chill.style.display = 'none';
    todoItems.appendChild(liItems);
}

addButton.addEventListener('click', addTodoToTheList);
addButton.addEventListener('click', pushTodosToTheArray);
addButton.addEventListener('click', function () {
    todoInput.value = '';
});


