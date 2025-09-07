import React, { useState } from "react";
import { FaTrash, FaArrowLeft, FaShoppingBag, FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import { useCart } from "../contexts/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  // Calculate subtotal
  const subtotal = cart.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 1;
    return sum + price * quantity;
  }, 0);

  // Shipping logic
  const SHIPPING_THRESHOLD = 500000;
  const SHIPPING_FEE = 50000;
  const shipping = subtotal > SHIPPING_THRESHOLD || cart.length === 0 ? 0 : SHIPPING_FEE;

  // Total
  const total = subtotal + shipping;

  // Update cart (placeholder for UI feedback)
  const handleUpdateCart = () => {
    alert("Savat yangilandi!");
  };

  // Return to shop
  const handleReturnToShop = () => {
    window.location.href = "/";
  };

  // Clear cart
  const handleClearCart = () => {
    if (window.confirm("Savatni butunlay tozalashni xohlaysizmi?")) {
      clearCart();
      alert("Savat tozalandi!");
    }
  };

  // Checkout
  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert("Savat bo'sh! Avval mahsulot qo'shing.");
      return;
    }
    setIsLoading(true);
    try {
      // Simulate server request
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert(`Xarid muvaffaqiyatli! Summa: ${total.toLocaleString("uz-UZ", { style: "currency", currency: "UZS" })}`);
      clearCart();
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Xarid jarayonida xatolik yuz berdi.");
    } finally {
      setIsLoading(false);
    }
  };

  // Update quantity with validation
  const handleUpdateQuantity = (id, quantity) => {
    if (quantity < 1) {
      alert("Miqdor 1 dan kam bo'lishi mumkin emas.");
      return;
    }
    if (quantity > 10) {
      alert("Bir mahsulotdan 10 tadan ortiq buyurtma qilish mumkin emas.");
      return;
    }
    updateQuantity(id, quantity);
  };

  // Remove item
  const handleRemoveFromCart = (id) => {
    if (window.confirm("Bu mahsulotni savatdan o'chirishni xohlaysizmi?")) {
      removeFromCart(id);
      alert("Mahsulot o'chirildi!");
    }
  };

  return (
    <div className="shopping-cart">
      <div className="cart-header">
        <h2 className="cart-main-title">Sizning Savatingiz</h2>
        <p className="cart-subtitle">{cart.length} ta mahsulot</p>
        {cart.length > 0 && (
          <button className="clear-cart-btn" onClick={handleClearCart}>
            <FaTimes /> Savatni tozalash
          </button>
        )}
      </div>

      {isLoading && <div className="loading-spinner">Yuklanmoqda...</div>}

      {cart.length === 0 ? (
        <div className="empty-cart-state">
          <div className="empty-cart-icon">🛒</div>
          <h3>Savat hozircha bo'sh</h3>
          <p>Do'konga o'tib, biror narsa qo'shing</p>
          <button className="primary-btn" onClick={handleReturnToShop}>
            <FaArrowLeft /> Do'konga qaytish
          </button>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items-section">
            <div className="cart-items-header">
              <span className="header-product">Mahsulot</span>
              <span className="header-price">Narx</span>
              <span className="header-quantity">Miqdor</span>
              <span className="header-total">Jami</span>
              <span className="header-action"></span>
            </div>

            <div className="cart-items-list">
              {cart.map((item) => (
                <div key={item.id} className="cart-item-card">
                  <div className="item-product">
                    <img
                      src={item.image || "/placeholder-image.jpg"}
                      alt={item.name || "Mahsulot"}
                      className="item-image"
                    />
                    <div className="item-details">
                      <h4 className="item-name">{item.name || "Noma'lum mahsulot"}</h4>
                      <p className="item-category">{item.category || "Umumiy tovar"}</p>
                    </div>
                  </div>

                  <div className="item-price">
                    {(Number(item.price) || 0).toLocaleString("uz-UZ", { style: "currency", currency: "UZS" })}
                  </div>

                  <div className="item-quantity">
                    <div className="quantity-selector">
                      <button
                        className="quantity-btn"
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <FaMinus />
                      </button>
                      <span className="quantity-value">{item.quantity || 1}</span>
                      <button
                        className="quantity-btn"
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>

                  <div className="item-total-price">
                    {((Number(item.price) || 0) * (item.quantity || 1)).toLocaleString("uz-UZ", {
                      style: "currency",
                      currency: "UZS",
                    })}
                  </div>

                  <div className="item-action">
                    <button
                      className="remove-item-btn"
                      onClick={() => handleRemoveFromCart(item.id)}
                      title="O'chirish"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-actions">
              <button className="secondary-btn" onClick={handleReturnToShop}>
                <FaArrowLeft /> Do'konga qaytish
              </button>
              <button className="secondary-btn" onClick={handleUpdateCart}>
                Savatni yangilash
              </button>
            </div>
          </div>

          <div className="cart-summary-section">
            <div className="order-summary">
              <h3>Buyurtma Xulosasi</h3>
              <div className="summary-row">
                <span>Mahsulotlar:</span>
                <span>{subtotal.toLocaleString("uz-UZ", { style: "currency", currency: "UZS" })}</span>
              </div>
              <div className="summary-row">
                <span>Yetkazib berish:</span>
                <span>
                  {shipping === 0
                    ? "Bepul"
                    : shipping.toLocaleString("uz-UZ", { style: "currency", currency: "UZS" })}
                </span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-row total">
                <span>Umumiy:</span>
                <span>{total.toLocaleString("uz-UZ", { style: "currency", currency: "UZS" })}</span>
              </div>

              <button
                className="checkout-btn"
                onClick={handleCheckout}
                disabled={isLoading || cart.length === 0}
              >
                {isLoading ? "Yuklanmoqda..." : "Xarid qilish"} <FaShoppingBag />
              </button>

              <p className="security-note">
                🔒 Xavfsiz to'lov. Ma'lumotlaringiz shaxsiy va himoyalangan.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;