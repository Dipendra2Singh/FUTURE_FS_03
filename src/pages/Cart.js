import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cart({ cart, updateQty, removeFromCart, placeOrder }) {
  const [name, setName] = useState('');
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const navigate = useNavigate();

  function checkout() {
    if (cart.length === 0) {
      alert('Cart is empty');
      return;
    }
    const ok = placeOrder(name || 'Guest');
    if (ok) {
      navigate('/checkout', { state: { cart, total, name: name || 'Guest' } });
    } else {
      alert('Failed to place order.');
    }
  }

  return (
    <section className="cart-page">
      <h2 className="page-title">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="empty">
          Your cart is empty. Visit <a href="/products">Products</a> to add items.
        </div>
      ) : (
        <div className="cart-grid">
          <div className="items">
            {cart.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.img} alt={item.title} />
                <div className="info">
                  <h4>{item.title}</h4>
                  <p>₹{item.price.toFixed(2)}</p>
                  <div className="qty">
                    <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                  </div>
                </div>
                <div className="remove">
                  <button className = "btn large" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <aside className="summary">
            <h3>Order Summary</h3>
            <div className="summary-row"><span>Items</span><span>{cart.length}</span></div>
            <div className="summary-row"><span>Total</span><span>₹{total.toFixed(2)}</span></div>
            <button className="btn large" onClick={checkout}>Place order</button>
          </aside>
        </div>
      )}
    </section>
  );
}
