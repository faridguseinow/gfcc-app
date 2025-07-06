import React, { useEffect, useState } from 'react';

const PriceList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://192.168.7.132:3001/api/prices')
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
  }, []);

  if (loading) return <p style={{ padding: '1rem' }}>Загрузка прайса...</p>;

  // Группировка по категориям
  const grouped = {};
  data.forEach(item => {
    if (!grouped[item.category]) grouped[item.category] = [];
    grouped[item.category].push(item);
  });

  return (
    <div style={{ padding: '1rem', overflowX: 'auto' }}>
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} style={{ marginBottom: '24px' }}>
          <h3 style={{ fontSize: '14px', marginBottom: '8px', color: '#444' }}>
            {category}
          </h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px' }}>
            <thead>
              <tr>
                <th style={thStyle}>Наименование</th>
                <th style={thStyle}>Опт</th>
                <th style={thStyle}>Доп</th>
                <th style={thStyle}>Розн</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, idx) => (
                <tr key={idx}>
                  <td style={tdStyle}>{item.name}</td>
                  <td style={tdStyle}>{format(item.wholesalePrice)}</td>
                  <td style={tdStyle}>{format(item.extraPrice)}</td>
                  <td style={tdStyle}>{format(item.retailPrice)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

const thStyle = {
  borderBottom: '1px solid #ccc',
  textAlign: 'left',
  padding: '6px',
  background: '#f6f6f6'
};

const tdStyle = {
  padding: '6px',
  borderBottom: '1px solid #eee'
};

function format(num) {
  return typeof num === 'number'
    ? num.toLocaleString('ru-RU', { minimumFractionDigits: 0, maximumFractionDigits: 2 })
    : '–';
}

export default PriceList;
