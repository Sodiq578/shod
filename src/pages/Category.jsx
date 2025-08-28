import React from 'react';
import { useParams, Link } from 'react-router-dom'; // Add Link import
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Category.css';

const Category = () => {
  const { cat } = useParams();
  
  // Decode URL parameter
  const decodedCategory = decodeURIComponent(cat);
  
  // Filter products by category
  const categoryProducts = products.filter(product => 
    product.category === decodedCategory
  );

  return (
    <div className="category-page">
      <h2>{decodedCategory}</h2>
      {categoryProducts.length > 0 ? (
        <div className="products-grid">
          {categoryProducts.map(product => (
            <Link key={product.id} to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      ) : (
        <p>Ushbu kategoriyada hozircha mahsulotlar mavjud emas.</p>
      )}
    </div>
  );
};

export default Category;