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
                    <span> ${item.name}</span>
                    <button class="deleteBtn"><i class="fa fa-trash-alt"></i></button>
                </li>
            </ul>*/



const makeAnLiItem = () => {
    const liItems = document.createElement('li');
   
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
addButton.addEventListener('click', function () {
    todoInput.value = '';
});


/*
const localDb = {
    setItem(key,value) {
        value = JSON.stringify(value);
    localstorage.setItem(key, value);    
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

const todos = [{name : 'value'},{name : 'value'}];

localDb.setItem('todos', todos);
*/