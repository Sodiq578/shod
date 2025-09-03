import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaSearch, FaUserCircle, FaHeart, FaShoppingCart } from 'react-icons/fa';
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
      <Link to="/" className="logo">LOGO</Link>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="What are you shopping for?"
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
          <FaHeart />
        </Link>
        <Link to="/cart" className="nav-link cart-link" aria-label="Cart">
          <FaShoppingCart /> {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>
        <Link to="/sign-in" className="nav-link" aria-label="Sign in">
          <FaUserCircle />
        </Link>
      </nav>
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
        {/* Mobile menu toggle icon can be added here if needed */}
      </button>
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <form className="mobile-search-bar" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="What are you shopping for?"
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
              <FaHeart />
            </Link>
            <Link to="/cart" className="mobile-nav-link cart-link" aria-label="Cart">
              <FaShoppingCart /> {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
            </Link>
            <Link to="/sign-in" className="mobile-nav-link" aria-label="Sign in">
              <FaUserCircle />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;