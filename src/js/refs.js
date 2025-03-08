'use strict';

const refs = {
  form: document.querySelector('#task-form'),
  titleInput: document.querySelector("[name='taskName']"),
  textInput: document.querySelector("[name='taskDescription']"),
  taskList: document.querySelector('#task-list'),
  themeToggle: document.querySelector('#themeToggle'),
  buttonAdd: document.querySelector('.header-form-btn')
};

export default refs;