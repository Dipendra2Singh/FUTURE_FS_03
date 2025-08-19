import React from 'react';
import ProductCard from '../components/ProductCard';

export default function Products({products, addToCart}){
  return (
    <section className="products-page">
      <h2 className="page-title">Products</h2>
      <div className="products-grid">
        {products.map(p=> (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
}
