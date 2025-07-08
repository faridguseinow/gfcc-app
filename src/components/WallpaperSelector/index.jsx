import React, { useEffect, useState } from 'react';
import './style.scss';

import bg1 from '/src/assets/media/bg_img.jpg';
import bg2 from '/src/assets/media/bg_img2.jpg';
import bg3 from '/src/assets/media/bg_img3.png';
import bg4 from '/src/assets/media/bg_img4.jpg';
import bg5 from '/src/assets/media/bg_img5.jpg';

const wallpapers = [bg1, bg2, bg3, bg4, bg5];

export default function WallpaperSelector() {
  const [selected, setSelected] = useState(localStorage.getItem('wallpaper') || '');

  useEffect(() => {
    const saved = localStorage.getItem('wallpaper');
    const bg = document.getElementById('background-layer');
    if (saved && bg) {
      bg.style.opacity = 0;
      setTimeout(() => {
        bg.style.backgroundImage = `url(${saved})`;
        bg.style.opacity = 1;
      }, 150);
    }
  }, []);

  const handleSelect = (url) => {
    setSelected(url);
    localStorage.setItem('wallpaper', url);
    const bg = document.getElementById('background-layer');
    if (bg) {
      bg.style.opacity = 0;
      setTimeout(() => {
        bg.style.backgroundImage = `url(${url})`;
        bg.style.opacity = 1;
      }, 150);
    }
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const imageUrl = reader.result;
      handleSelect(imageUrl); // используем как обычный фон
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="wallpaper_selector glass">
      <h2>Выберите фон</h2>
      <div className="wallpaper_list">
        {wallpapers.map((url, index) => (
          <img
            key={index}
            src={url}
            className={selected === url ? 'active' : ''}
            alt={`Wallpaper ${index + 1}`}
            onClick={() => handleSelect(url)}
          />
        ))}
        {/* 🔼 Кастомный фон */}
        <label className="upload_custom">
          +
          <input type="file" accept="image/*" onChange={handleUpload} />
        </label>
      </div>
    </div>
  );
}

