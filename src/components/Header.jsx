import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaSearch, FaUserCircle, FaEyeSlash, FaBars, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../contexts/CartContext';
import './Header.css';

const Header = ({ setSelectedCategory, searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle undefined cart
  const safeCart = cart || [];
  const totalItems = safeCart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      setSelectedCategory('Search Results');
      navigate('/');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">Do‘kon</Link>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Do‘konda qidirish"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search products"
        />
        <button type="submit" aria-label="Search">
          <FaSearch />
        </button>
      </form>
      <nav className="nav-links">
        <Link to="/favorites" className="nav-link" aria-label="Favorites">
          <FaHeart /> Sevimlilar
        </Link>
        <Link to="/cart" className="nav-link cart-link" aria-label="Cart">
          <FaShoppingCart /> Savat {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>
        <div className="user-section">
          <span className="online-status">Online</span>
          <div className="user-avatar">
            <FaUserCircle /> Pikachu
          </div>
          <button className="hide-btn" aria-label="Hide profile">
            <FaEyeSlash /> Yashirish
          </button>
        </div>
      </nav>
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
        <FaBars />
      </button>
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <form className="mobile-search-bar" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Do‘konda qidirish"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search products"
            />
            <button type="submit" aria-label="Search">
              <FaSearch />
            </button>
          </form>
          <nav className="mobile-nav-links">
            <Link to="/favorites" className="mobile-nav-link" aria-label="Favorites">
              <FaHeart /> Sevimlilar
            </Link>
            <Link to="/cart" className="mobile-nav-link cart-link" aria-label="Cart">
              <FaShoppingCart /> Savat {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
            </Link>
            <div className="mobile-user-section">
              <span className="online-status">Online</span>
              <div className="user-avatar">
                <FaUserCircle /> Pikachu
              </div>
              <button className="hide-btn" aria-label="Hide profile">
                <FaEyeSlash /> Yashirish
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;