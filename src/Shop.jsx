import React from "react";
import { items } from "./Data";
import "./Shop.css";

const Shop = ({ items }) => {
  return (
    <div className="shop-page">
      <div className="row">
        {items.map((shopItem) => (
          <div key={shopItem.id} className="col-md-4">
            <div className="card" style={{ width: "20rem" }}>
              <img
                className="card-img-top"
                src={shopItem.imgSrc}
                alt={shopItem.title}
              />
              <div className="card-body">
                <h5 className="card-title">{shopItem.title}</h5>
                <p className="card-text">{shopItem.description}</p>
                <p className="card-price">Rs. {shopItem.price}</p>
                <a href="https://www.daraz.com.np/#?" className="btn btn-info">
                  Buy Now
                </a>
                <button type="button" className="btn btn-warning mx-3">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
