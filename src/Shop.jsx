import React from "react";
import { items } from "./Data"; // Ensure this file exports the above array
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop-page">
      <div className="row">
        {items.map((shopItem) => (
          <div key={shopItem.id} className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={shopItem.imgSrc}
                alt={shopItem.title}
              />
              <div className="card-body">
                <h5 className="card-title">{shopItem.title}</h5>
                <p className="card-text">{shopItem.description}</p>
                <p className="card-price">₹{shopItem.price}</p>
                <a
                  href={shopItem.amazonLink}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
