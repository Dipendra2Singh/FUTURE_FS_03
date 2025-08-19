import React, { useState } from "react";
import "./Checkout.css";

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    paymentMethod: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create order object without items or summary since you don't want that
    const order = {
      id: Date.now(),
      billingInfo: { ...formData },
      placedAt: new Date().toISOString(),
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    existingOrders.push(order);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    alert("Order placed successfully!");

    // Clear form
    setFormData({
      fullName: "",
      email: "",
      address: "",
      city: "",
      zip: "",
      paymentMethod: "",
    });
  };

  return (
    <div className="checkout-page">
      <div className="checkout-card">
        <h2 className="checkout-title">Checkout</h2>

        <div className="checkout-content">
          {/* Billing Form */}
          <form className="billing-form" onSubmit={handleSubmit}>
            <h3>Billing Information</h3>

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="zip"
              placeholder="ZIP Code"
              value={formData.zip}
              onChange={handleChange}
              required
            />

            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Payment Method
              </option>
              <option value="card">Credit/Debit Card</option>
              <option value="cod">Cash on Delivery</option>
              <option value="upi">UPI</option>
            </select>

            <button type="submit" className="place-order-btn">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
