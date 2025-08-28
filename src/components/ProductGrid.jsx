import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ products, selectedCategory, searchTerm }) => {
  const filteredProducts = selectedCategory === 'All'
    ? products
    : selectedCategory === 'Search Results'
    ? products.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products.filter(p => 
        (selectedCategory === 'Trending' && p.trending) ||
        (selectedCategory === 'Searched' && p.searched) ||
        (selectedCategory === 'Promo' && p.promo)
      );

  return (
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;