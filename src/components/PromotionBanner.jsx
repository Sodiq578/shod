import React from 'react';
import './PromotionBanner.css';

const PromotionBanner = () => {
  return (
    <div className="promotion-banner">
      <div className="banner-content">
        <h2>Faqatgina cheklangan vaqt uchun!!</h2>
        <div className="price-section">
          <div className="price-item">
            <span className="label">Hammasi</span>
            <span className="price">11 ming so'm*</span>
          </div>
          <div className="price-item">
            <span className="label">Yetkazib berish bepul</span>
            <span className="price">0 so'm</span>
          </div>
        </div>
        <div className="discount-note">
          *354 ta mahsulot
        </div>
      </div>
    </div>
  );
};

export default PromotionBanner;