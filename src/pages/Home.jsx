import React from 'react';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';
import './Home.css';

const Home = ({ selectedCategory, searchTerm }) => {
  return (
    <div className="home">
      <ProductGrid products={products} selectedCategory={selectedCategory} searchTerm={searchTerm} />
    </div>
  );
};

export default Home;