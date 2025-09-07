import React from 'react';
import { useUser } from '../contexts/UserContext';
import ProductCard from '../components/ProductCard';
import './Favorites.css';

const Favorites = () => {
  const { favorites } = useUser();

  return (
    <div className="favorites-page">
      <h1>Sevimli Mahsulotlar</h1>
      
      {favorites.length === 0 ? (
        <div className="empty-favorites">
          <h2>Sizda hali sevimli mahsulotlar yo'q</h2>
          <p>Mahsulotlarni saqlash uchun ♡ belgisini bosing</p>
        </div>
      ) : (
        <>
          <p className="favorites-count">Jami: {favorites.length} ta mahsulot</p>
          <div className="products-grid">
            {favorites.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Favorites;