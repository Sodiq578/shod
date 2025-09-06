import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useUser } from '../contexts/UserContext';
import { useCart } from '../contexts/CartContext';
import './ProductCard.css';
import bag from '../images/bag.svg';

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoSlideRef = useRef(null);
  const { addToFavorites, removeFromFavorites, favorites } = useUser();
  const { addToCart } = useCart();

  // Check if product is in favorites
  useEffect(() => {
    const found = favorites.find(fav => fav.id === product.id);
    setIsFavorite(!!found);
  }, [favorites, product.id]);

  // Agar productda images array bo'lsa, undan foydalanamiz, aks holda image dan
  const images = product.images || [product.image];

  // Avtomatik slider efekti
  useEffect(() => {
    if (images.length > 1 && isHovered) {
      autoSlideRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000); // Har 2 soniyada avtomatik ravishda o'zgaradi
    } else {
      clearInterval(autoSlideRef.current);
    }

    return () => clearInterval(autoSlideRef.current);
  }, [isHovered, images.length]);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ ...product, quantity: 1 });
  };

  const handleNextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="product-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image">
          <img 
            src={images[currentImageIndex]} 
            alt={product.name} 
            loading="lazy" 
          />
          
          {/* Agar 1 dan ortiq rasm bo'lsa, navigatsiya ko'rsatamiz */}
          {images.length > 1 && (
            <div className="image-navigation-bottom">
              <div className="image-indicators">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`image-indicator ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
              <div className="nav-buttons-right">
                <button 
                  className="nav-button"
                  onClick={handlePrevImage}
                  aria-label="Previous image"
                >
                  <FaChevronLeft />
                </button>
                <button 
                  className="nav-button"
                  onClick={handleNextImage}
                  aria-label="Next image"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          )}
          
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