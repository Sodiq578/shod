import React from 'react';
import { products } from './products'; // Import the products array
import './ProductList.css';

const ProductList = ({ selectedCategory }) => {
  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category.toLowerCase() === selectedCategory.toLowerCase())
    : products;

  return (
    <div className="product-list">
      <h2>{selectedCategory ? `Products in ${selectedCategory}` : 'All Products'}</h2>
      {filteredProducts.length === 0 ? (
        <p>No products found for this category.</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
              <p>Rating: {product.rating} ({product.reviews} reviews)</p>
              <p>Seller: {product.seller}</p>
              <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
              {product.trending && <span className="trending">Trending</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;