'use strict';

export function createTaskMarkup(task) {
  return `
      <li class="task-list-item">
          <button class="task-list-item-btn" data-id="${task.id}">Delete</button>
          <h3>${task.title}</h3>
          <p>${task.text}</p>
      </li>
    `;
}
