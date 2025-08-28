import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image">
          <img src={product.image} alt={product.name} loading="lazy" />
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">{product.price}</p>
          <div className="product-rating">
            <FaStar className="star-icon" /> {product.rating} ({product.reviews} sharhlar)
          </div>
          <button className="add-to-cart-btn">
            <FaShoppingCart /> Savatga
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;