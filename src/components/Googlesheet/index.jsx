import React, { useState, useEffect } from 'react';

const GoogleSheet = () => {
  const [data, setData] = useState([]); // Все данные
  const [filteredData, setFilteredData] = useState([]); // Отфильтрованные данные
  const [searchTerm, setSearchTerm] = useState(''); // Текущий запрос

  useEffect(() => {
    // CSV-link of google sheets
    const sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRCnDvXwNmkB-hfZzKzZCEmsYT3-C5K9VgIORHYyd4D8IEzTv9_z3yzFJfEY6A-AjfTC2P5cZ00MjiS/pub?gid=799270477&single=true&output=csv';

    fetch(sheetUrl)
      .then(response => response.text())
      .then(csvText => {
        const rows = csvText.split('\n').slice(1); // Пропускаем первую строку с заголовками
        const formatPrice = (price) => {
          return price.toLocaleString('ru-RU', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          });
        };
        const result = rows.map(row => {
          const columns = row.split(',');

          const name = columns[1]?.trim() || 'Нет данных';
          const rawPrice = columns[5]?.replace(/"/g, '').replace(',', '.');
          const price = parseFloat(rawPrice) || 0;

          return { name, price: formatPrice(price) };
        });


        setData(result);
        setFilteredData(result); // Показываем все данные по умолчанию
      })
      .catch(error => console.error('Ошибка загрузки данных:', error));
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <div className="header_search">
        <h1>Прайслист</h1>

        {/* Поле для поиска */}
        <input
          type="text"
          placeholder="Поиск по наименованию..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>


      <table className="flower-table">
        <thead>
          <tr>
            <th>Наименование</th>
            <th>Цена (₽)</th>
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
