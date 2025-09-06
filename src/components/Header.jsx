import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaHeart, FaShoppingCart, FaUserCircle, FaGlobe, FaChevronDown } from 'react-icons/fa';
import { useCart } from '../contexts/CartContext';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = ({ setSelectedCategory, searchTerm, setSearchTerm }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { cart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  // Handle undefined cart
  const safeCart = cart || [];
  const totalItems = safeCart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setSelectedCategory(t('searchPlaceholder'));
      navigate('/');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMobileDropdownOpen(false); // Close dropdown when toggling mobile menu
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="container">
      <header className="header">
        <Link to="/" className="logo">{t('logo')}</Link>

        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder={t('searchPlaceholder')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label={t('searchAriaLabel')}
          />
          <button type="submit" aria-label={t('searchAriaLabel')}>
            <FaSearch />
          </button>
        </form>

        <nav className="nav-links">
          <Link to="/favorites" className="nav-link" aria-label={t('favoritesAriaLabel')}>
            <FaHeart size={20} /> <span className="nav-text">{t('favorites')}</span>
          </Link>
          <Link to="/cart" className="nav-link cart-link" aria-label={t('cartAriaLabel')}>
            <FaShoppingCart size={20} /> <span className="nav-text">{t('cart')}</span>
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </Link>
          <Link to="/profile" className="nav-link" aria-label={t('profileAriaLabel')}>
            <FaUserCircle size={20} /> <span className="nav-text">{t('profile')}</span>
          </Link>
         
          <div className="language-select">
            <div className="language-toggle">
              <FaGlobe size={20} />
              <select
                value={i18n.language}
                onChange={(e) => changeLanguage(e.target.value)}
                aria-label={t('selectLanguageAriaLabel')}
              >
                <option value="en">English</option>
                <option value="uz">O'zbekcha</option>
                <option value="ru">Русский</option>
              </select>
            </div>
          </div>
        </nav>

        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label={t('toggleMenuAriaLabel')}
        >
          <span className="menu-icon">☰</span>
        </button>

        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <form className="mobile-search-bar" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label={t('searchAriaLabel')}
              />
              <button type="submit" aria-label={t('searchAriaLabel')}>
                <FaSearch />
              </button>
            </form>
            <nav className="mobile-nav-links">
              <Link to="/favorites" className="mobile-nav-link" aria-label={t('favoritesAriaLabel')}>
                <FaHeart size={20} /> <span className="mobile-nav-text">{t('favorites')}</span>
              </Link>
              <Link to="/cart" className="mobile-nav-link cart-link" aria-label={t('cartAriaLabel')}>
                <FaShoppingCart size={20} /> <span className="mobile-nav-text">{t('cart')}</span>
                {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
              </Link>
              <Link to="/profile" className="mobile-nav-link" aria-label={t('profileAriaLabel')}>
                <FaUserCircle size={20} /> <span className="mobile-nav-text">{t('profile')}</span>
              </Link>
              <div className={`mobile-dropdown ${isMobileDropdownOpen ? 'open' : ''}`}>
                <div className="mobile-dropdown-toggle" onClick={toggleMobileDropdown}>
                  <span className="mobile-nav-text">{t('more')}</span>
                  <FaChevronDown size={14} style={{ marginLeft: '10px' }} />
                </div>
                <div className="mobile-dropdown-menu">
                  <Link to="/settings" className="mobile-dropdown-item">{t('settings')}</Link>
                  <Link to="/orders" className="mobile-dropdown-item">{t('orders')}</Link>
                  <Link to="/support" className="mobile-dropdown-item">{t('support')}</Link>
                </div>
              </div>
              <div className="language-select">
                <div className="language-toggle">
                  <FaGlobe size={20} />
                  <select
                    value={i18n.language}
                    onChange={(e) => changeLanguage(e.target.value)}
                    aria-label={t('selectLanguageAriaLabel')}
                  >
                    <option value="en">English</option>
                    <option value="uz">O'zbekcha</option>
                    <option value="ru">Русский</option>
                  </select>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;