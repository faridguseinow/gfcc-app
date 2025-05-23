import React, { useState } from 'react';
import './style.scss';
import GoogleSheet from '/src/components/GoogleSheet';

export default function Price() {
  const [searchTerm, setSearchTerm] = useState('');
  const [fontSize, setFontSize] = useState(16);

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 1, 30));
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 1, 10));
  };

  return (
    <div className="pricelist_container">

      <div className="header_search">

        <div className="titles">
          
          <div className="title_left">
          <h1>Прайслист</h1>
          <p>
            Цены интегрированы с Google таблиц. <br />
            Для розницы +25% к опт.
          </p>
        </div>

          <div className="title_right">
            <p>Размер текста</p>
            <div className="font-size-controls">
              <button onClick={decreaseFontSize}>A–</button>
              <button onClick={increaseFontSize}>A+</button>
            </div>
          </div>

        </div>

        <div className="search_input">
          <input
            type="text"
            placeholder="Поиск по наименованию..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

      </div>

      <div className="googlesheets_container">
        <GoogleSheet searchTerm={searchTerm} fontSize={fontSize} />
      </div>
    </div>
  );
}
