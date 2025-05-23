import React from 'react';
import "/src/App.scss";

export default function ThemeToggleSwitch({ toggleTheme, theme }) {
  return (
    <label className="switch">
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === 'dark-theme'}
      />
      <span className="slider"></span>
    </label>
  );
}
