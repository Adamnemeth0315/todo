'use strict';

const todoInput = document.querySelector('.input');
const addButton = document.querySelector('.addBtn');
const todoItems = document.querySelector('.todo__ul');

(function getDate() {
    const date = document.querySelector('.date');
    const dateNow = new Date();
    date.textContent = dateNow.toLocaleDateString('hu');
})();
