import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Banner from './components/Banner'; // Import the Banner component
import Footer from './components/Footer';
import Home from './pages/Home';
import Category from './pages/Category';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Favorites from './components/Favorites';
import { CartProvider } from './contexts/CartContext';
import { UserProvider } from './contexts/UserContext';
import './App.css';

function App() {
  const { i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <div className="app">
            <Header
              setSelectedCategory={setSelectedCategory}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Banner /> {/* Banner placed below Header and above Navbar */}
            <Navbar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <div className="main-content">
              <main>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Home
                        selectedCategory={selectedCategory}
                        searchTerm={searchTerm}
                      />
                    }
                  />
                  <Route path="/category/:cat" element={<Category />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/favorites" element={<Favorites />} />
                </Routes>
              </main>
            </div>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;