import React from 'react';

export default function Orders({orders}){
  return (
    <section className="orders-page">
      <h2 className="page-title">Your Orders</h2>
      {orders.length===0 ? (
        <div className="empty">No orders yet — place one from the cart.</div>
      ) : (
        <div className="orders-list">
          {orders.map(o=> (
            <div className="order-card" key={o.id}>
              <div className="order-head">
                <div><strong>{o.customer}</strong></div>
                <div>{new Date(o.date).toLocaleString()}</div>
              </div>
              <div className="order-items">
                {o.items.map(it=> (
                  <div className="order-item" key={it.id}>
                    <img src={it.img} alt={it.title} />
                    <div>
                      <div className="oi-title">{it.title} x {it.qty}</div>
                      <div className="oi-price">₹{(it.price*it.qty).toFixed(2)}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="order-total">Total: ₹{o.total.toFixed(2)}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
