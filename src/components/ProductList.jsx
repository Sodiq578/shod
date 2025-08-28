// components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = ({ products, title }) => {
  return (
    <section>
      <h2 className="section-title">{title}</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;