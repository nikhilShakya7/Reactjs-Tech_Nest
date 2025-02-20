import React from "react";
import "./Shop.css";

import { ToastContainer, toast, Bounce } from "react-toastify"; // ✅ Import Bounce
import "react-toastify/dist/ReactToastify.css";

const Shop = ({ items, cart, setCart }) => {
  const addToCart = (id, price, description, imgSrc) => {
    const obj = { id, price, description, imgSrc };
    setCart((prevCart) => {
      const updatedCart = [...prevCart, obj];
      console.log("Updated Cart:", updatedCart);
      toast.success("Added To Cart", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce, // ✅ Now Bounce is defined
      });
      return updatedCart;
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce} // ✅ Now Bounce is defined
      />
      <div className="shop-page">
        <div className="container">
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
                    <a
                      href="https://www.daraz.com.np/#?"
                      className="btn btn-info"
                    >
                      Buy Now
                    </a>
                    <button
                      type="button"
                      onClick={() =>
                        addToCart(
                          shopItem.id,
                          shopItem.price,
                          shopItem.description,
                          shopItem.imgSrc
                        )
                      }
                      className="btn btn-warning mx-3"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
