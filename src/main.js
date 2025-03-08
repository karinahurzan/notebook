'use strict';

const refs = {
  form: document.querySelector('#task-form'),
  titleInput: document.querySelector("[name='taskName']"),
  textInput: document.querySelector("[name='taskDescription']"),
  taskList: document.querySelector('#task-list'),
  themeToggle: document.querySelector('#themeToggle'),
};

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme) {
    document.body.className = savedTheme; 
  } else {
    document.body.className = 'theme-light'; 
  }

  const tasks = loadTasksFromLocalStorage();
  refs.taskList.innerHTML = tasks
    .map(task => createTaskMarkup(task))
    .join('');
});

function saveTasksToLocalStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
}

function createTaskMarkup(task) {
  return `
      <li class="task-list-item">
          <button class="task-list-item-btn" data-id="${task.id}">Delete</button>
          <h3>${task.title}</h3>
          <p>${task.text}</p>
      </li>
    `;
}

refs.taskList.addEventListener('click', event => {
  if (event.target.className !== 'task-list-item-btn') {
    return;
  }

  const target = event.target;
  const taskElement = target.closest('.task-list-item');

  taskElement.remove();

  const tasks = loadTasksFromLocalStorage();
  const taskTitle = taskElement.querySelector('h3').textContent;
  const updatedTasks = tasks.filter(task => task.title !== taskTitle);
  saveTasksToLocalStorage(updatedTasks);
});

refs.form.addEventListener('submit', event => {
  event.preventDefault();

  const title = refs.titleInput.value.trim();
  const description = refs.textInput.value.trim();

  if (title && description) {
    addTask(title, description);
    refs.titleInput.value = '';
    refs.textInput.value = '';
  } else {
    alert('Будь ласка, заповніть всі поля!');
  }
});

function addTask(title, description) {
  const task = { id: Date.now(), title, text: description };
  const tasks = loadTasksFromLocalStorage();

  tasks.push(task);
  saveTasksToLocalStorage(tasks);

  refs.taskList.innerHTML = tasks
    .map(task => createTaskMarkup(task))
    .join('');
}

function toggleTheme() {
  const currentTheme = document.body.classList.contains('theme-dark') ? 'theme-dark' : 'theme-light';
  const newTheme = currentTheme === 'theme-dark' ? 'theme-light' : 'theme-dark';
  
  document.body.classList.replace(currentTheme, newTheme);

  localStorage.setItem('theme', newTheme);
}

refs.themeToggle.addEventListener('click', toggleTheme);
