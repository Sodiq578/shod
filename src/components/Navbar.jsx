import React, { useState, useEffect, useRef } from 'react';
import { FiChevronDown, FiChevronUp, FiMenu, FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ selectedCategory, setSelectedCategory }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const navbarRef = useRef(null);

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

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpenDropdown(null);
        if (isMobile) {
          setMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobile]);

  const toggleDropdown = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    navigate(`/category/${encodeURIComponent(categoryName)}`);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setOpenDropdown(null);
  };

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="nav-container">
        {isMobile && (
          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        )}

        <div className={`nav-items ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {categories.map((cat, index) => (
            <div
              key={index}
              className="nav-item"
              onMouseEnter={!isMobile ? () => toggleDropdown(index) : undefined}
            >
              {/* Asosiy kategoriya faqat dropdown ochadi */}
              <div
                className="nav-main-item"
                onClick={() => {
                  if (isMobile && cat.sub.length > 0) {
                    toggleDropdown(index);
                  }
                }}
                role="button"
                aria-haspopup={cat.sub.length > 0}
                aria-expanded={openDropdown === index}
              >
                <span>{cat.name}</span>
                {cat.sub.length > 0 && (
                  <span className="dropdown-icon">
                    {openDropdown === index ? <FiChevronUp /> : <FiChevronDown />}
                  </span>
                )}
              </div>

              {/* Faqat sub bosilganda filter qiladi */}
              {openDropdown === index && cat.sub.length > 0 && (
                <div className={`dropdown-menu ${isMobile ? 'mobile-dropdown' : ''}`}>
                  {cat.sub.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      className={`dropdown-item ${selectedCategory === subItem ? 'active' : ''}`}
                      onClick={() => handleCategoryClick(subItem)}
                      role="button"
                    >
                      {subItem}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
