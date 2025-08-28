// components/Sidebar.js
import React, { useState } from 'react';
import { FiChevronRight, FiChevronDown } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  const [openSections, setOpenSections] = useState({});
  const navigate = useNavigate();

  const categories = [
    { name: 'Бумажная продукция', sub: ['Бланки', 'Блокноты', 'Бумага для заметок', 'Бумага для черчения', 'Бумага копировальная', 'Бумага самоклеящаяся', 'Бумага формата', 'Бумага цветная для принтеров'] },
    { name: 'Для творчества', sub: ['Акварель', 'Акриловые краски', 'Аксессуары для творчества', 'Восковые карандаши и мелки', 'Выжигание', 'Вышивка и плетение', 'Гравюра', 'Гуашь', 'Доски для лепки'] },
    { name: 'Игры', sub: ['Для компьютера'] },
    { name: 'Канцелярские аксессуары', sub: ['Папки', 'Файлы', 'Обложки для документов', 'Канцелярские наборы', 'Подставки для ручек', 'Лотки для бумаг'] },
    { name: 'Офисная техника', sub: ['Аксессуары для мобильного телефона', 'Батарейки', 'Ламинаторы', 'Мыши и клавиатуры', 'Настольные лампы', 'Переплетная машина', 'Принтеры и МФУ', 'Резак'] },
    { name: 'Офисные товары', sub: ['Степлеры', 'Дыроколы', 'Скрепки', 'Корректоры', 'Клей', 'Скотч'] },
    { name: 'Письменные принадлежности', sub: ['Ручки', 'Карандаши', 'Маркеры', 'Текстовыделители', 'Стержни для ручек', 'Тушь'] },
    { name: 'Системы архивации', sub: ['Архивные коробки', 'Папки с зажимом', 'Регистраторы', 'Разделители', 'Индексные карточки'] },
    { name: 'Спорттовары', sub: ['Мячи', 'Скакалки', 'Гантели', 'Спортивные сумки', 'Фитнес-аксессуары'] },
    { name: 'Школьные принадлежности', sub: ['Пеналы', 'Тетради', 'Альбомы для рисования', 'Цветная бумага', 'Пластилин', 'Школьные ранцы'] },
    { name: 'Штемпельная продукция', sub: ['Штемпельные подушки', 'Датеры', 'Нумераторы', 'Оснастки для печатей'] },
  ];

  const toggleSection = (name) => {
    setOpenSections((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    // Kategoriya sahifasiga yo'naltirish
    navigate(`/category/${encodeURIComponent(categoryName)}`);
  };

  return (
    <aside className="sidebar">
      <h3>Категории</h3>
      {categories.map((cat, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => toggleSection(cat.name)}
          >
            <span className="category-name">{cat.name}</span>
            <span className="toggle-icon">
              {openSections[cat.name] ? <FiChevronDown /> : <FiChevronRight />}
            </span>
          </div>
          {openSections[cat.name] && cat.sub.length > 0 && (
            <ul className="accordion-content">
              {cat.sub.map((subItem, subIndex) => (
                <li
                  key={subIndex}
                  className={selectedCategory === subItem ? 'active' : ''}
                  onClick={() => handleCategoryClick(subItem)}
                >
                  {subItem}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;