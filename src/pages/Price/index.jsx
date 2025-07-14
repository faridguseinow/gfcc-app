import React, { useState, useEffect } from 'react';
import './style.scss';
import PriceList from '/src/components/PriceList';

export default function Price() {
  const [searchTerm, setSearchTerm] = useState('');
  const [fontSize, setFontSize] = useState(11);
  const [reloadKey] = useState(0);
  const [filterOpen, setFilterOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);

  const increaseFontSize = () => setFontSize(f => Math.min(f + 2, 24));
  const decreaseFontSize = () => setFontSize(f => Math.max(f - 2, 8));

  useEffect(() => {
    fetch('https://gfcc-price-api-server.onrender.com/api/prices')
      .then(res => res.json())
      .then(items => {
        const counts = {};
        (Array.isArray(items) ? items : []).forEach(item => {
          if (item.category) counts[item.category] = (counts[item.category] || 0) + 1;
        });
        const sorted = Object.entries(counts)
          .sort((a, b) => a[0].localeCompare(b[0]))
          .map(([name, count]) => ({ name: name.replace(/[.,]/g, '').trim(), count }));
        setCategories(sorted);
      });
  }, [reloadKey]);

  const handleCategorySelect = (name) => {
    setSelectedCategory(name);
    setFilterOpen(false);
  };

  return (
    <div className="pricelist_container">
      <div className="header_search sticky-header">
        <div className="titles glass">
          <div className="title_left">
            <h1>Прайслист</h1>
            <div className="font-size-controls">
              <button onClick={decreaseFontSize}>A–</button>
              <button onClick={increaseFontSize}>A+</button>
              <button className="filter-toggle" onClick={() => setFilterOpen(true)}>
                Категории {filterOpen ? '▲' : '▼'}
              </button>
            </div>
            <div className="search_input">
              <input
                type="text"
                placeholder="Поиск..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
        </div>
      </div>

      {filterOpen && (
        <div className="filter_panel open">
          <p>* Цены в руб. (опт +5%) — обновляются с сервера.</p>
          <div className="category_filter">
            <h1>Категории:</h1>
            <div className="category_list">
              {categories.map(cat => (
                <button
                  key={cat.name}
                  className={selectedCategory === cat.name ? 'active glass' : 'glass'}
                  onClick={() => handleCategorySelect(cat.name)}
                >
                  {cat.name} ({cat.count})
                </button>
              ))}
              <button
                className={!selectedCategory ? 'active glass' : 'glass'}
                onClick={() => handleCategorySelect(null)}
              >
                Все
              </button>
            </div>
          </div>
        </div>
      )}

      {!filterOpen && (
        <div className="googlesheets_container">
          <PriceList
            searchTerm={searchTerm}
            fontSize={fontSize}
            selectedCategory={selectedCategory}
          />
        </div>
      )}
    </div>
  );
}