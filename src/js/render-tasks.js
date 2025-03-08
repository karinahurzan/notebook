'use strict';

import { createTaskMarkup } from './markup-tasks';
import refs from './refs';
import {
  loadTasksFromLocalStorage,
  saveTasksToLocalStorage,
} from './local-storage-api';

function deleteTask(event) {
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
}

export function addTask(title, description) {
  const task = { title, description };
  const tasks = loadTasksFromLocalStorage();

  tasks.push(task);
  saveTasksToLocalStorage(tasks);

  refs.taskList.innerHTML = tasks
    .map(task => createTaskMarkup(task.title, task.description))
    .join('');
}
