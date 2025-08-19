import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar({ cartCount }) {
  return (
    <header className="navbar">
      <div className="brand">
        <Link to="/"><div className="logo">ShopMate</div></Link>
        <div className="tag">Interactive • Vibrant • Responsive</div>
      </div>
      <nav className="navlinks">
        <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>
          Products
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => isActive ? 'active' : ''}>
          Cart ({cartCount})
        </NavLink>
        <NavLink to="/orders" className={({ isActive }) => isActive ? 'active' : ''}>
          Orders
        </NavLink>

        {/* Added Links */}
        <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>
          Login
        </NavLink>
        <NavLink to="/signup" className={({ isActive }) => isActive ? 'active' : ''}>
          Signup
        </NavLink>
        <NavLink to="/checkout" className={({ isActive }) => isActive ? 'active' : ''}>
          Checkout
        </NavLink>
      </nav>
    </header>
  );
}
