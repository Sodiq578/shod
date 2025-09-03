import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Category.css';

const Category = () => {
  const { cat } = useParams();

  // Agar URL param bo‘lmasa → "Barcha mahsulotlar"
  const decodedCategory = cat ? decodeURIComponent(cat) : null;

  // Filtrlash
  const categoryProducts = !decodedCategory
    ? products // default holda barcha mahsulotlar
    : products.filter((product) => product.category === decodedCategory);

  return (
    <div className="category-page">
      <h2>{decodedCategory || "Barcha mahsulotlar"}</h2>
      {categoryProducts.length > 0 ? (
        <div className="products-grid">
          {categoryProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              style={{ textDecoration: "none" }}
            >
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
