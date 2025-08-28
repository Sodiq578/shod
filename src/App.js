// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Category from './pages/Category';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Favorites from './components/Favorites';  // <-- endi pages ichidan to‘g‘ri import
import { CartProvider } from './contexts/CartContext';
import { UserProvider } from './contexts/UserContext';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <div className="app">
            {/* Header */}
            <Header 
              setSelectedCategory={setSelectedCategory} 
              searchTerm={searchTerm} 
              setSearchTerm={setSearchTerm} 
            />

            <div className="main-content">
              {/* Sidebar */}
              <Sidebar 
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory} 
              />

              {/* Asosiy kontent */}
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

            {/* Footer */}
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
