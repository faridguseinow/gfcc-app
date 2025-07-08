import React, { useState, useEffect } from 'react';
import './style.scss';
import PriceList from '/src/components/PriceList';

export default function Price() {
  const [searchTerm, setSearchTerm] = useState('');
  const [fontSize, setFontSize] = useState(11);
  const [reloadKey, setReloadKey] = useState(0);
  const [filterOpen, setFilterOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);

  const increaseFontSize = () => setFontSize(f => Math.min(f + 1, 20));
  const decreaseFontSize = () => setFontSize(f => Math.max(f - 1, 8));

  useEffect(() => {
    fetch('https://gfcc-price-api-server.onrender.com/api/prices')
      .then(res => res.json())
      .then(items => {
        const counts = {};
        (Array.isArray(items) ? items : []).forEach(item => {
          if (item.category) {
            counts[item.category] = (counts[item.category] || 0) + 1;
          }
        });
        const sorted = Object.entries(counts)
          .sort((a, b) => a[0].localeCompare(b[0]))
          .map(([name, count]) => ({
            name: name.replace(/[.,]/g, '').trim(),
            count
          }));

        setCategories(sorted);
      });
  }, [reloadKey]);

  const handleCategorySelect = (name) => {
    setSelectedCategory(name);
    setFilterOpen(false); // Закрыть панель при выборе
  };

  return (
    <div className="pricelist_container">
      <div className="header_search sticky-header">
        <div className="titles">
          <div className="title_left">
            <h1>Прайслист</h1>

            <div className="font-size-controls">
              <button onClick={decreaseFontSize}>A–</button>
              <button onClick={increaseFontSize}>A+</button>
            </div>

            <div className="search_input">
              <input
                type="text"
                placeholder="Поиск..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          <div className="categories">
            <button className="filter-toggle" onClick={() => setFilterOpen(!filterOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
                <path fill="#ecbb47" d="M38,12H22l-4-4H8c-2.2,0-4,1.8-4,4v24c0,2.2,1.8,4,4,4h31c1.7,0,3-1.3,3-3V16C42,13.8,40.2,12,38,12z" />
                <path fill="#FFCA28" d="M42.2,18H15.3c-1.9,0-3.6,1.4-3.9,3.3L8,40h31.7c1.9,0,3.6-1.4,3.9-3.3l2.5-14C46.6,20.3,44.7,18,42.2,18z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`filter_panel ${filterOpen ? 'open' : ''}`}>
        <p>
          *Цены в рублях по текущему курсу оптовые + 5% (для частных лиц) и обновляются с сервера в реальном времени. <br />
        </p>

        <div className="category_filter">
          <h1>Категории:</h1>
          <div className="category_list">
            {categories.map((cat) => (
              <button
                key={cat.name}
                className={selectedCategory === cat.name ? 'active' : ''}
                onClick={() => handleCategorySelect(cat.name)}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
            <button
              onClick={() => handleCategorySelect(null)}
              className={!selectedCategory ? 'active' : ''}
            >
              Все
            </button>
          </div>
        </div>
      </div>

      {!filterOpen && (
        <div className="googlesheets_container">
          <PriceList
            searchTerm={searchTerm}
            fontSize={fontSize}
            reloadKey={reloadKey}
            selectedCategory={selectedCategory}
          />
        </div>
      )}
    </div>
  );
}
