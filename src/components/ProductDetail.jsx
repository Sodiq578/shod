import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { useUser } from '../contexts/UserContext';
import ProductCard from './ProductCard';
import { FaStar, FaShoppingCart, FaHeart, FaCheck, FaTimes, FaStore, FaChevronLeft } from 'react-icons/fa';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));
  
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, favorites } = useUser();
  
  // Check if product is in favorites
  const [isFavorite, setIsFavorite] = useState(false);
  
  useEffect(() => {
    if (product) {
      const found = favorites.find((fav) => fav.id === product.id);
      setIsFavorite(!!found);
    }
  }, [favorites, product]);

  const hasVariants = product && product.variants && product.variants.length > 0;
  const [selectedVariant, setSelectedVariant] = useState(
    hasVariants ? product.variants[0] : null
  );

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Mahsulot topilmadi</h2>
        <p>Iltimos, boshqa mahsulotlarni ko'rib chiqing</p>
        <Link to="/" className="back-to-home">
          Bosh sahifaga qaytish
        </Link>
      </div>
    );
  }

  // Handle favorite click
  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  // Display only 3 thumbnails
  const displayedThumbnails = product.images && product.images.length > 0 
    ? product.images.slice(0, 3) 
    : [product.image];

  const parsePrice = (priceString) => {
    const numericString = priceString.replace(/[^0-9]/g, '');
    return parseInt(numericString);
  };

  const formatPrice = (priceNumber) => {
    return `${priceNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} so'm`;
  };

  const basePrice = parsePrice(product.price);
  const totalPrice = basePrice * quantity;

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart({ 
      ...product, 
      quantity,
      variant: selectedVariant 
    });
  };

  const similarProducts = products.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="product-detail-container">
      {/* Back button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaChevronLeft /> Orqaga
      </button>

      <nav className="breadcrumb">
        <Link to="/">Bosh sahifa</Link> / <Link to="/products">Mahsulotlar</Link> / <span>{product.name}</span>
      </nav>

      <div className="product-detail">
        <div className="product-gallery">
          {/* Left side thumbnails */}
          <div className="thumbnails-column">
            {displayedThumbnails.map((img, index) => (
              <div 
                key={index} 
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={img} alt={`${product.name} ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>

          {/* Main image */}
          <div className="main-image-container">
            <div className="main-image">
              <img 
                src={product.images ? product.images[selectedImage] : product.image} 
                alt={product.name} 
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          
          <div className="product-meta">
            <span className="product-rating">
              <FaStar /> {product.rating} ({product.reviews} sharhlar)
            </span>
            <span className="product-seller">
              <FaStore /> {product.seller}
            </span>
            {product.inStock ? (
              <span className="in-stock">
                <FaCheck /> Sotuvda mavjud
              </span>
            ) : (
              <span className="out-of-stock">
                <FaTimes /> Sotuvda mavjud emas
              </span>
            )}
          </div>

          <div className="product-price-section">
            <p className="unit-price">Birlik narxi: <span>{product.price}</span></p>
            <div className="quantity-section">
              <div className="quantity-control">
                <span>Miqdor:</span>
                <div className="quantity-buttons">
                  <button
                    className="quantity-btn"
                    onClick={decreaseQuantity}
                    disabled={quantity === 1}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="quantity-value">{quantity}</span>
                  <button 
                    className="quantity-btn" 
                    onClick={increaseQuantity}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>
              <p className="total-price">Umumiy narx: <span>{formatPrice(totalPrice)}</span></p>
            </div>
          </div>

          {hasVariants && (
            <div className="product-variants">
              <h3>Ranglar:</h3>
              <div className="variant-options">
                {product.variants.map((variant, index) => (
                  <div
                    key={index}
                    className={`variant-option ${selectedVariant === variant ? 'selected' : ''}`}
                    onClick={() => setSelectedVariant(variant)}
                  >
                    {variant}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="action-buttons">
            <button 
              className="add-to-cart-btn" 
              onClick={handleAddToCart}
              disabled={!product.inStock}
              aria-label="Add to cart"
            >
              <FaShoppingCart /> Savatga qo'shish
            </button>
            <button 
              className={`wishlist-btn ${isFavorite ? 'active' : ''}`} 
              onClick={handleFavoriteClick}
              aria-label="Add to wishlist"
            >
              <FaHeart /> {isFavorite ? "Sevimlilardan o'chirish" : "Sevimlilarga qo'shish"}
            </button>
          </div>

          <div className="short-description">
            <p>{product.description.substring(0, 150)}...</p>
          </div>
        </div>
      </div>

      <div className="product-details-tabs">
        <div className="tabs-header">
          <button 
            className={activeTab === 'description' ? 'active' : ''}
            onClick={() => setActiveTab('description')}
            role="tab"
            aria-selected={activeTab === 'description'}
            aria-controls="description-panel"
          >
            Tavsif
          </button>
          <button 
            className={activeTab === 'specifications' ? 'active' : ''}
            onClick={() => setActiveTab('specifications')}
            role="tab"
            aria-selected={activeTab === 'specifications'}
            aria-controls="specifications-panel"
          >
            Xususiyatlar
          </button>
          <button 
            className={activeTab === 'reviews' ? 'active' : ''}
            onClick={() => setActiveTab('reviews')}
            role="tab"
            aria-selected={activeTab === 'reviews'}
            aria-controls="reviews-panel"
          >
            Sharhlar ({product.reviews})
          </button>
        </div>
        
        <div className="tabs-content">
          {activeTab === 'description' && (
            <div className="tab-panel" id="description-panel" role="tabpanel">
              <p>{product.description}</p>
              {product.fullDescription && <p>{product.fullDescription}</p>}
            </div>
          )}
          
          {activeTab === 'specifications' && (
            <div className="tab-panel" id="specifications-panel" role="tabpanel">
              <table className="specifications-table">
                <tbody>
                  <tr>
                    <td>Brend</td>
                    <td>{product.brand || 'Nomalum'}</td>
                  </tr>
                  <tr>
                    <td>Model</td>
                    <td>{product.model || 'Nomalum'}</td>
                  </tr>
                  <tr>
                    <td>Ishlab chiqaruvchi</td>
                    <td>{product.manufacturer || 'Nomalum'}</td>
                  </tr>
                  <tr>
                    <td>Toifa</td>
                    <td>{product.category || 'Nomalum'}</td>
                  </tr>
                  {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                    <tr key={key}>
                      <td>{key}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <div className="tab-panel" id="reviews-panel" role="tabpanel">
              <div className="reviews-summary">
                <div className="average-rating">
                  <h3>{product.rating}</h3>
                  <div className="stars">
                    {'★'.repeat(Math.round(product.rating))}
                    {'☆'.repeat(5 - Math.round(product.rating))}
                  </div>
                  <p>{product.reviews} sharhlar</p>
                </div>
                <button className="add-review-btn">Sharh qo'shish</button>
              </div>
              
              <div className="review-list">
                {product.reviewsData && product.reviewsData.length > 0 ? (
                  product.reviewsData.map((review, index) => (
                    <div key={index} className="review-item">
                      <div className="reviewer">{review.name}</div>
                      <div className="review-rating">
                        {'★'.repeat(review.rating)}
                        {'☆'.repeat(5 - review.rating)}
                      </div>
                      <div className="review-text">{review.comment}</div>
                      <div className="review-date">{review.date}</div>
                    </div>
                  ))
                ) : (
                  <div className="no-reviews">
                    <p>Hozircha hech qanday sharh yo'q. Birinchi bo'ling!</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {similarProducts.length > 0 && (
        <div className="similar-products-section">
          <h2>O'xshash mahsulotlar</h2>
          <div className="products-grid">
            {similarProducts.map(similarProduct => (
              <ProductCard key={similarProduct.id} product={similarProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;