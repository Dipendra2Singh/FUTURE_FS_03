import React from 'react';

export default function ProductCard({product, addToCart}){
  return (
    <div className="card">
      <div className="card-media">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="card-body">
        <h3>{product.title}</h3>
        <p className="desc">{product.desc}</p>
        <div className="meta">
          <div className="price">₹{product.price.toFixed(2)}</div>
          <div className="rating">★ {product.rating}</div>
        </div>
        <button className="btn" onClick={()=> addToCart(product)}>Add to cart</button>
      </div>
    </div>
  );
}
