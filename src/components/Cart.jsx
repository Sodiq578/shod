// src/components/Cart.jsx
import React from "react";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../contexts/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  // Umumiy summani hisoblash
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Savat</h2>

      {cart.length === 0 ? (
        <p>Savat bo‘sh 😔</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>Narxi: {item.price} so‘m</p>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <p>
              <strong>Umumiy summa:</strong> {totalPrice} so‘m
            </p>
            <button className="clear-cart-btn" onClick={clearCart}>
              Savatni tozalash
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
