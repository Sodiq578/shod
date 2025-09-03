import React from 'react';
import { products } from '../data/products';

const ProductList = ({ selectedCategory }) => {
  // Filter products based on selectedCategory (array)
  const filteredProducts = products.filter((product) =>
    selectedCategory.includes(product.category)
  );

  return (
    <div className="product-list">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>Рейтинг: {product.rating} ({product.reviews} отзывов)</p>
            <p>Продавец: {product.seller}</p>
            {product.trending && <span>Тренд</span>}
            {product.inStock && <span>В наличии</span>}
          </div>
        ))
      ) : (
        <p>Товары не найдены</p>
      )}
    </div>
  );
};

export default ProductList;