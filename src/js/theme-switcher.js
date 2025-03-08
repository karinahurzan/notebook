'use strict';

// theme-switcher.js
import refs from './refs';

export function toggleTheme() {
  const currentTheme = document.body.classList.contains('theme-dark')
    ? 'theme-dark'
    : 'theme-light';
  const newTheme = currentTheme === 'theme-dark' ? 'theme-light' : 'theme-dark';
  document.body.classList.replace(currentTheme, newTheme);
}

refs.themeToggle.addEventListener('click', toggleTheme);
