'use strict';

const todoForm = document.querySelector('.form__input');
const todoInput = document.querySelector('.input');
const addButton = document.querySelector('.addBtn');
const todoItems = document.querySelector('.todo__ul');
const completedTodoItems = document.querySelector('.complete__todos');
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

const setStartFunction = () => {todoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addTodo();
});
}


const addTodo = () => {
    if (todoInput.value) {
        const todo = {
            name : todoInput.value,
            complete : false,
        }
        todoList.push(todo);
        localDatabase.setItem('todoList', todoList);
        
        addTodoToTheList(todo);
        todoInput.value = '' ;
    }
}

const initTheProgram = () => {
    setStartFunction();
    loadExistingTodos();
    //checkboxCheck(id);
}

const loadExistingTodos = () => {
    const savedTodos = localDatabase.getItem('todoList');
    if (savedTodos) {
        todoList = savedTodos;
    }
    
    if (todoList && Array.isArray(todoList)) {
        todoList.forEach( todo => addTodoToTheList(todo) );
    }
};

//LocalStorage kezelő objektum
const localDatabase = {
    setItem(key, value) {
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

let id = 0;
const addTodoToTheList = (todo) => {
   const liItems = document.createElement('li');
    todoItems.classList.add('todo__item');
    id++;
    liItems.innerHTML =  `<input class="todo__checkbox" data-setid=${id} type="checkbox">
    <span class"li__text">${todo.name}</span>
    <button class="deleteBtn" data-buttunid=${id}><i class="fa fa-trash"></i></button>`;
    chill.classList.add('hidden');
    todoItems.appendChild(liItems);
    }




const checkboxCheck = () => {
    
    }

//Törlés gomb beállítása


initTheProgram();
