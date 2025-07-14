import React, { useEffect, useState } from 'react';
import './style.scss';

import bg1 from '/src/assets/media/bg-imgs/bg_img.jpg';
import bg2 from '/src/assets/media/bg-imgs/bg_img2.jpg';
import bg3 from '/src/assets/media/bg-imgs/bg_img3.jpg';
import bg4 from '/src/assets/media/bg-imgs/bg_img4.jpg';
import bg5 from '/src/assets/media/bg-imgs/bg_img5.jpg';
import bg6 from '/src/assets/media/bg-imgs/bg_img6.jpg';
import bg7 from '/src/assets/media/bg-imgs/bg_img7.jpg';

const wallpapers = [bg1, bg2, bg3, bg4, bg5, bg6, bg7];

export default function WallpaperSelector({ onSelect }) {
  const DEFAULT_BG = localStorage.getItem('wallpaper') || '';
  const [selected, setSelected] = useState(DEFAULT_BG);

  const applyBackground = (url) => {
    const bg = document.getElementById('background-layer');
    if (bg) {
      bg.style.opacity = 0;
      // setTimeout(() => {
        bg.style.backgroundImage = `url(${url})`;
        bg.style.opacity = 1;
      // }, 150);
    }
  };

  useEffect(() => {
    console.log('test rasul')
    if (selected) {
      applyBackground(selected);
    }
  }, [selected]);

  const handleSelect = (url) => {
    localStorage.setItem('wallpaper', url);
    setSelected(url);
    applyBackground(url);
    if (onSelect) onSelect(); // Закрыть панель
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 4032 * 4032) {
      alert("Файл должен быть меньше 5 МБ");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const imageUrl = reader.result;
      handleSelect(imageUrl);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="wallpaper_selector glass">
      <h2>Выберите фон</h2>
      <div className="wallpaper_list">
        {wallpapers.map((url, idx) => (
          <img
            key={idx}
            src={url}
            alt={`Wallpaper ${idx + 1}`}
            className={selected === url ? 'active' : ''}
            onClick={() => handleSelect(url)}
          />
        ))}
        <label className="upload_custom" title="Загрузить обои">
          +
          <input type="file" accept="image/*" onChange={handleUpload} />
        </label>
      </div>
    </div>
  );
}
