'use strict';

export function saveTasksToLocalStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function loadTasksFromLocalStorage() {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
}
