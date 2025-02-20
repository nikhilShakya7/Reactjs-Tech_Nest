import React from "react";
import "./Cart.css";
const Cart = ({ cart, setCart }) => {
  return (
    <div className="card-container">
      {cart.length === 0 ? (
        <h2 className="text-white text-center">Your cart is empty</h2>
      ) : (
        cart.map((shopItem) => (
          <div key={shopItem.id} className="cart-card">
            <img
              className="cart-img"
              src={shopItem.imgSrc}
              alt={shopItem.description}
            />
            <div className="cart-img-overlay">
              <h5 className="cart-title">{shopItem.description}</h5>
              <p className="cart-text">Price: Rs. {shopItem.price}</p>
              <button
                className="btn-danger"
                onClick={() =>
                  setCart(cart.filter((item) => item.id !== shopItem.id))
                }
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
