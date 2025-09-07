import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            
            <p>Eng yaxshi mahsulotlarni eng qulay narxlarda taklif qilamiz.</p>
          </div>
          
          <div className="footer-section">
            <h4>Kategoriyalar</h4>
            <Link to="/category/elektronika">Elektronika</Link>
            <Link to="/category/kiyim">Kiyim</Link>
            <Link to="/category/sport">Sport</Link>
            <Link to="/category/uy">Uy & Hayot</Link>
          </div>
          
          <div className="footer-section">
            <h4>Mijozlarga xizmat</h4>
            <Link to="/yordam">Yordam</Link>
            <Link to="/bekor-qilish">Bekor qilish & Almashish</Link>
            <Link to="/yetkazib-berish">Yetkazib berishni kuzatish</Link>
          </div>
          
          <div className="footer-section">
            <h4>Bizni kuzatib boring</h4>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-telegram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
        
      
      </div>
    </footer>
  );
};

export default Footer;