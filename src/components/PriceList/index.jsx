import React, { useState, useEffect } from 'react';
import './style.scss';

const PriceList = ({ searchTerm, fontSize, reloadKey, selectedCategory }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch('https://gfcc-price-api-server.onrender.com/api/prices')
    .then(res => res.json())
      .then(json => {
        const cleaned = Array.isArray(json)
          ? json.filter(i => i.name && i.category)
          : [];
        setData(cleaned);
        setLoading(false);
      })
      .catch(err => {
        console.error('Ошибка загрузки прайса:', err);
        setLoading(false);
      });
  }, [reloadKey]);

  if (loading) return <p className="price-loading">Загрузка прайса...</p>;

  // Фильтрация и группировка
  const filtered = data.filter(item => {
    const cleanCategory = item.category.replace(/[.,]/g, '').trim();
    const matchesCategory = selectedCategory
      ? cleanCategory === selectedCategory
      : true;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const grouped = {};
  filtered.forEach(item => {
    const cleanCategory = item.category.replace(/[.,]/g, '').trim();
    if (!grouped[cleanCategory]) grouped[cleanCategory] = [];
    grouped[cleanCategory].push(item);
  });

  const sortedGrouped = Object.entries(grouped)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([category, items]) => [
      category,
      items.sort((a, b) => a.name.localeCompare(b.name))
    ]);

  return (
    <div className="price-wrapper glass">
      {sortedGrouped.map(([category, items]) => (
        <div key={category} className="price-category-block">
          <h3 className="price-category-title sticky-category">
            {category} ({items.length})
          </h3>
          <table className="price-table" style={{ fontSize: `${fontSize}px` }}>
            <thead>
              <tr>
                <th>Наименование</th>
                <th>Цена*</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.name}</td>
                  <td>{format(item.extraPrice)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

function format(num) {
  return typeof num === 'number'
    ? num.toLocaleString('ru-RU', { minimumFractionDigits: 0, maximumFractionDigits: 2 })
    : '–';
}

export default PriceList;
