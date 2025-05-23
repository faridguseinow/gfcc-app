import React from 'react';
import './style.scss';
import { useTheme } from '/src/useTheme.js';

import ThemeToggleSwitch from '/src/components/ThemeToggleSwitch';

import LogoSM from '/src/assets/icons/logo_sm.svg';
import LogoTB from '/src/assets/icons/logo_text_black.svg';
import LogoTW from '/src/assets/icons/logo_text.svg';

export default function Index() {
  const { theme, toggleTheme } = useTheme();

  // Выбираем логотип в зависимости от темы
  const logoText = theme === 'dark-theme' ? LogoTW : LogoTB;

  return (
    <div className="header">
      <div className="logo">
        <img src={LogoSM} width={40} alt="logo symbol" />
        <img src={logoText} width={100} alt="logo text" />
      </div>

      <div className="theme_switcher">
        <ThemeToggleSwitch toggleTheme={toggleTheme} theme={theme} />
      </div>
    </div>
  );
}
