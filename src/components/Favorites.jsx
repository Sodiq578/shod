import React from 'react';
import { Link } from 'react-router-dom';

const Favorites = () => {
  return (
    <div className="favorites">
      <h2>Sevimlilar</h2>
      <p>Hozircha sevimli mahsulotlar yo'q.</p>
      <Link to="/">Bosh sahifaga qaytish</Link>
    </div>
  );
};

export default Favorites;