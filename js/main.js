'use strict';

const todoForm = document.querySelector('.form__input');
const todoInput = document.querySelector('.input');
const addButton = document.querySelector('.addBtn');
const todoItems = document.querySelector('.todo__container');
const completedTodoItems = document.querySelector('.complete__todos');
const chill = document.querySelector('.chill__box');
const date = document.querySelector('.date');
const day = document.querySelector('.day');
const daysName = ['Sunday', 'Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const todoCounterHolder = document.querySelector('.counter');
const showHideButton = document.querySelector('.show-hide');

let todoList = [];
let completeTodoList= [];
let idCounter = 0; 
let todoCounter = 0;

const counterUpdater = (direction) => {
    if (direction){
        todoCounter++;
    } else {
        todoCounter -= 1;
    }
    todoCounterHolder.textContent = todoCounter;
}



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

const todoCompleted = (id) => {
    let valueString = (localStorage.getItem(id)); 
    console.log(valueString);   
    /*valueString = valueString.replace(':1', ':2');
    localStorage.setItem(id, valueString);
    const targetCheckbox = document.querySelector(`[data-setid="${id}"]`);
    const targetTodo = targetCheckbox.parentElement;
    targetCheckbox.disabled = true;
    targetTodo.remove();
    completedContainer.insertBefore(targetTodo, completedContainer.firstChild);*/
}

const addSetEventListener = (id) => {
    document.querySelector(`[data-setid="${id}"]`).addEventListener('click', () => todoCompleted(id));
}

const addTodo = () => {
    if (todoInput.value) {
        const todo = {
            id : idCounter,
            name : todoInput.value,
            complete : false,
        }
        todoList.push(todo);
        localDatabase.setItem('todoList', todoList);
        idCounter++;
        addTodoToTheList(todo);
        todoInput.value = '';
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

const deleteTodosFunction = (todo) => {
    localDatabase.removeItem(todo.name);
}

let id = 0;
let completedId =0;
const addTodoToTheList = (todo) => {
   const liItems = document.createElement('li');
    todoItems.classList.add('todo__item');
    id++;
    liItems.innerHTML =  `<input class="todo__checkbox" data-setid=${id} type="checkbox">
    <span class"li__text">${todo.name}</span>
    <button class="deleteBtn" data-id=${id}><i class="fa fa-trash"></i></button>`;
    chill.classList.add('hidden');
    liItems.querySelector('.todo__checkbox').addEventListener('change', ev => {
        if (ev.target.checked == true) {
            completedTodoItems.appendChild(liItems);
            let valueString = (localStorage.getItem('todoList')); 
            valueString = valueString.replace(':false', ':true'); //Ez így még nem jó. 
            counterUpdater(false);
        } 
    });
    counterUpdater(true);
    liItems.querySelector(`[data-id="${id}"]`).addEventListener('click', (id) => {
        todoItems.removeChild(liItems);
        localStorage.removeItem('todoList.id');
        counterUpdater(false);
    }); //Elem törlése működik de a localstorage-ból nem törli az elemet. 
    todoItems.appendChild(liItems);
}


//Localstorage kiürítése.
const clearAllButton = document.querySelector('.clearBtn');
clearAllButton.addEventListener('click', (todo) => {
    localStorage.clear();
    todoList = [];
    todoItems.classList.remove('todo__item');
    chill.classList.remove('hidden');
    id = 0;
});

//Show / Hide completed todos
const setShowHide = () => {
    let btnContent = showHideButton.textContent;
    if (btnContent == 'Show Complete') {
        completedTodoItems.classList.remove('hide');
        showHideButton.textContent = 'Hide Complete';
    } else {
        completedTodoItems.classList.add('hide');
        showHideButton.textContent = 'Show Complete';
    }
}

const addShowHideClickListener = () => {
    showHideButton.addEventListener('click', setShowHide);
}


addShowHideClickListener();


initTheProgram();
