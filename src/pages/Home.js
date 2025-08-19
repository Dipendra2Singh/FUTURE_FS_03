import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="home-hero">
      <div className="hero-inner">
        <h1>Shop smarter. Shop happier.</h1>
        <p>
          Discover our curated tech & lifestyle picks with a beautiful UI, smooth animations, and a cart that just works.
        </p>
        <div className="hero-actions">
          <Link to="/products" className="cta">Browse Products</Link>
          <Link to="/cart" className="cta ghost">View Cart</Link>
        </div>
      </div>

      <div className="hero-features">
        <div className="feat">
          <h4>⚡ Fast Checkout</h4>
          <p>Local storage powered cart — no login needed.</p>
        </div>
        <div className="feat">
          <h4>📱 Fully Responsive</h4>
          <p>Seamless shopping on mobiles, tablets & desktops.</p>
        </div>
        <div className="feat">
          <h4>🎨 Delightful UI</h4>
          <p>Smooth hover effects and elegant transitions.</p>
        </div>
      </div>
    </section>
  );
}
