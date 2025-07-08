import React, { useState } from 'react';
import './style.scss';
import { useTheme } from '/src/useTheme.js';

import ThemeToggleSwitch from '/src/components/ThemeToggleSwitch';
import WallpaperSelector from '/src/components/WallpaperSelector';

import LogoSM from '/src/assets/icons/logo_sm.svg';
import LogoTB from '/src/assets/icons/logo_text_black.svg';
import LogoTW from '/src/assets/icons/logo_text.svg';

import BrushIcon from '@mui/icons-material/Brush';

export default function Index() {
  const { theme, toggleTheme } = useTheme();
  const logoText = theme === 'dark-theme' ? LogoTW : LogoTB;
  const glassTheme = theme === 'dark-theme' ? 'dark' : 'light';

  const [isOpen, setIsOpen] = useState(false);

  const togglePersonalize = () => setIsOpen(!isOpen);

  return (
    <header className={`header glass ${glassTheme}`}>
      <div className="logo">
        <img src={LogoSM} width={40} alt="logo symbol" />
      </div>

      <button className="personalize-btn glass" onClick={togglePersonalize}>
        <BrushIcon/>
      </button>

      {isOpen && (
        <div className="personalize-panel glass">
          <div className="theme_switcher">
            <p>Темная тема</p>
            <ThemeToggleSwitch toggleTheme={toggleTheme} theme={theme} />
          </div>
          <div className="wallpaper_section glass">
            <WallpaperSelector />
          </div>
        </div>
      )}
    </header>
  );
}
