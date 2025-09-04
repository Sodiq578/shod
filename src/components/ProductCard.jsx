// src/components/ProductCard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useUser } from '../contexts/UserContext';
import { useCart } from '../contexts/CartContext';
import './ProductCard.css';
import bag from '../images/bag.svg';

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToFavorites, removeFromFavorites, favorites } = useUser();
  const { addToCart } = useCart();

  // Check if product is in favorites
  useEffect(() => {
    const found = favorites.find(fav => fav.id === product.id);
    setIsFavorite(!!found);
  }, [favorites, product.id]);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
    // setIsFavorite(!isFavorite); // Bu qatorni olib tashladim, chunki useEffect yangilaydi
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ ...product, quantity: 1 });
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image">
          <img src={product.image} alt={product.name} loading="lazy" />
          <button 
            className={`like-btn ${isFavorite ? 'active' : ''}`}
            onClick={handleFavoriteClick}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <FaHeart />
          </button>
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <div className="product-box">
            <p className="product-price">{product.price}</p>
            <button 
              className="add-to-cart-btn"
              onClick={handleAddToCart}
              aria-label="Add to cart"
            >
              <img src={bag} alt="Shopping bag" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;