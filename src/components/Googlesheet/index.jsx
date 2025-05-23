import React, { useState, useEffect } from 'react';

const CACHE_KEY = 'googleSheetData';
const CACHE_TTL = 1000 * 60 * 60; // 1 час

const GoogleSheet = ({ searchTerm, fontSize }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const cached = localStorage.getItem(CACHE_KEY);

    if (cached) {
      const { timestamp, result } = JSON.parse(cached);
      const now = Date.now();

      if (now - timestamp < CACHE_TTL) {
        setData(result);
        setFilteredData(result);
        return; // используем кэш
      }
    }

    // если нет кэша или он устарел — загружаем
    const sheetUrl =
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vRCnDvXwNmkB-hfZzKzZCEmsYT3-C5K9VgIORHYyd4D8IEzTv9_z3yzFJfEY6A-AjfTC2P5cZ00MjiS/pub?gid=799270477&single=true&output=csv';

    fetch(sheetUrl)
      .then((response) => response.text())
      .then((csvText) => {
        const rows = csvText.split('\n').slice(1);
        const result = rows.map((row) => {
          const columns = row.split(',');
          const name = columns[1]?.trim() || 'Нет данных';
          const rawPriceStr = columns[5]?.replace(/"/g, '').replace(/\s/g, '').replace(',', '.').trim();

          let priceFormatted = 'нет данных';
          if (rawPriceStr && !isNaN(rawPriceStr)) {
            const priceNum = parseFloat(rawPriceStr);
            priceFormatted = priceNum.toLocaleString('ru-RU', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
            });
          }

          return { name, price: priceFormatted };
        });

        setData(result);
        setFilteredData(result);

        // сохраняем в кэш
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          timestamp: Date.now(),
          result
        }));
      })
      .catch((error) => console.error('Ошибка загрузки данных:', error));
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, data]);

  return (
    <div className="table-container" style={{ overflowX: 'auto' }}>
      <table className="flower-table" style={{ fontSize: `${fontSize}px` }}>
        <thead>
          <tr>
            <th>Наименование</th>
            <th>Опт (₽)</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GoogleSheet;
