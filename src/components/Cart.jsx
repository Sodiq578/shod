import React from 'react';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? <p>Cart is empty</p> : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - Rp {item.price.toLocaleString()}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <p>Total: Rp {total.toLocaleString()}</p>
    </div>
  );
};

export default Cart;