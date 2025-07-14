import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState('light-theme');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light-theme';
    setTheme(savedTheme);
    document.body.classList.add(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
    setTheme(newTheme);

    // Удаляем старый класс, добавляем новый
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(newTheme);

    localStorage.setItem('theme', newTheme);
  };

  return { theme, toggleTheme };
}
