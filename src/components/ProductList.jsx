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
        <div className="product-list__grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-list__card">
              <img src={product.image} alt={product.name} className="product-list__image" />
              <h3 className="product-list__card-title">{product.name}</h3>
              <p className="product-list__card-text">{product.description}</p>
              <p className="product-list__card-text">Price: {product.price}</p>
              <p className="product-list__card-text">Rating: {product.rating} ({product.reviews} reviews)</p>
              <p className="product-list__card-text">Seller: {product.seller}</p>
              <p className="product-list__card-text">{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
              {product.trending && <span className="product-list__trending">Trending</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;