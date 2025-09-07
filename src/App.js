import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Category from "./pages/Category";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Favorites from "./components/Favorites";
import AdminPanel from "./pages/AdminPanel";
import { CartProvider } from "./contexts/CartContext";
import { UserProvider } from "./contexts/UserContext";
import "./App.css";

function AppContent({ selectedCategory, setSelectedCategory, searchTerm, setSearchTerm, changeLanguage }) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.altKey && event.key.toLowerCase() === 't') {
        navigate("/admin");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);

  return (
    <div className="app">
      <Header
        setSelectedCategory={setSelectedCategory}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        changeLanguage={changeLanguage}
      />
      <div className="main-content">
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <Navbar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                  <Home selectedCategory={selectedCategory} searchTerm={searchTerm} />
                </>
              }
            />
            <Route path="/category/:cat" element={<Category />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="*" element={<div>{t('404: Page not found')}</div>} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  const { i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <AppContent
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            changeLanguage={changeLanguage}
          />
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;

