import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Checkout from './pages/Checkout';
import productsData from './data/products';

export default function App(){
  const [products] = useState(productsData);
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('shopmate_cart')) || [];
    } catch { return []; }
  });
  const [orders, setOrders] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('shopmate_orders')) || [];
    } catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem('shopmate_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('shopmate_orders', JSON.stringify(orders));
  }, [orders]);

  function addToCart(product, qty = 1) {
    setCart(prev => {
      const found = prev.find(p => p.id === product.id);
      if (found) {
        return prev.map(p => p.id === product.id ? { ...p, qty: p.qty + qty } : p);
      }
      return [...prev, { ...product, qty }];
    });
  }

  function updateQty(id, qty) {
    setCart(prev => prev.map(p => p.id === id ? { ...p, qty: Math.max(1, qty) } : p));
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(p => p.id !== id));
  }

  function placeOrder(customerName = 'Guest') {
    if (cart.length === 0) return false;
    const order = {
      id: 'ord_' + Date.now(),
      date: new Date().toISOString(),
      items: cart,
      total: cart.reduce((s, i) => s + i.price * i.qty, 0),
      customer: customerName
    };
    setOrders(prev => [order, ...prev]);
    setCart([]);
    return true;
  }

  return (
    <Router>
      <div className="app">
        <Navbar cartCount={cart.reduce((s, i) => s + i.qty, 0)} />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products products={products} addToCart={addToCart} />} />
            <Route path="/cart" element={
              <Cart
                cart={cart}
                updateQty={updateQty}
                removeFromCart={removeFromCart}
                placeOrder={placeOrder}
              />
            } />
            <Route path="/orders" element={<Orders orders={orders} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/checkout" element={<Checkout cart={cart} placeOrder={placeOrder} />} />
          </Routes>
        </main>
        <footer
  style={{
    fontSize: "10px",
    padding: "4px 0",
    textAlign: "center",
    backgroundColor: "#f8f8f8",
    color: "#666",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0, // ensures it stretches fully across
    width: "100%",
    margin: 0, // remove any extra space
    zIndex: 999, // keep it above content
    boxShadow: "0 -1px 4px rgba(0,0,0,0.1)"
  }}
>
  © {new Date().getFullYear()} ShopMate — built with ❤️
</footer>

      </div>
    </Router>
  );
}
