import React, { useState, useEffect, useRef } from 'react';
import './style.scss';
import { useTheme } from '/src/useTheme.js';
import { useLocation } from 'react-router-dom';

import ThemeToggleSwitch from '/src/components/ThemeToggleSwitch';
import WallpaperSelector from '/src/components/WallpaperSelector';

import LogoSM from '/src/assets/icons/logo_sm.svg';
import LogoTB from '/src/assets/icons/logo_text_black.svg';
import LogoTW from '/src/assets/icons/logo_text.svg';

import BrushIcon from '@mui/icons-material/Brush';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const logoText = theme === 'dark-theme' ? LogoTW : LogoTB;

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const panelRef = useRef(null);

  const togglePersonalize = () => setIsOpen(prev => !prev);

  // Закрытие при клике вне панели
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Закрытие при смене маршрута
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Закрытие при выборе фона (прокидываем колбэк в WallpaperSelector)
  const handleWallpaperSelect = () => {
    setIsOpen(false);
  };

  console.log(isOpen)


  return (
    <>
      <header className="header glass">
        <div className="logo">
          <img src={LogoSM} width={40} alt="logo symbol" />
          <img src={logoText} width={100} alt="logo text" />
        </div>

        <button className="personalize-btn" onClick={togglePersonalize}>
          <BrushIcon />
        </button>

      </header>

      <div className="personalize-panel glass" ref={panelRef} style={{ opacity: isOpen ? 1 : 0 , pointerEvents: isOpen ? 'all': 'none'}}>
        <div className="theme_switcher">
          <p>Темная тема</p>
          <ThemeToggleSwitch toggleTheme={toggleTheme} theme={theme} />
        </div>
        <div className="wallpaper_section">
          <WallpaperSelector onSelect={handleWallpaperSelect} />
        </div>
      </div>
    </>
  );
}
