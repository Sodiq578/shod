import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Category.css';

const Category = () => {
  const { t } = useTranslation();
  const { cat } = useParams();
  const decodedCategory = cat ? decodeURIComponent(cat) : null;

  // Map translated subcategory names to their keys for matching
  const categoryKeyMap = {
    [t('categories.blanks')]: 'blanks',
    [t('categories.notepads')]: 'notepads',
    [t('categories.notePaper')]: 'notePaper',
    // Add all subcategory translations and their corresponding keys
    [t('categories.pens')]: 'pens',
    [t('categories.pencils')]: 'pencils',
    // ... add other mappings
  };

  // Convert decodedCategory to the corresponding key
  const normalizedCategory = categoryKeyMap[decodedCategory] || decodedCategory;

  // Filter products based on normalized category
  const categoryProducts = !normalizedCategory
    ? products // Show all products if no category is selected
    : products.filter((product) => product.category === normalizedCategory);

  return (
    <div className="category-page">
      <h2>{decodedCategory || t('allProducts')}</h2>
      {categoryProducts.length > 0 ? (
        <div className="products-grid">
          {categoryProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              style={{ textDecoration: 'none' }}
            >
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      ) : (
        <p>{t('noProductsInCategory')}</p>
      )}
    </div>
  );
};

export default Category;