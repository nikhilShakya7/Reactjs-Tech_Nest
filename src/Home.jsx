import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "./Home.module.css"; // Import CSS module

const Home = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <>
      <div className={styles["home-page"]}>
        {" "}
        {/* Use styles from CSS module */}
        <div className={styles.container}>
          <div className={styles["background-container"]}>
            <h1>Tech</h1>
            <h2>Nest</h2>
          </div>
          <div className={styles.text}>
            <p>
              At TechNest, we make shopping exciting, effortless, and rewarding
              with quality products, seamless browsing, secure transactions, and
              exceptional customer support.
            </p>
          </div>
        </div>
        <button className={styles.button} onClick={() => navigate("/shop")}>
          Shop 🛒
        </button>
      </div>
      <h3>Our Services</h3>
      <div className={styles.galleryContainer}>
        <div className={styles.galleryContainer}>
          {[
            { src: "./laptop.webp", alt: "Laptops" },
            { src: "./iphone.webp", alt: "Mobiles" },
            { src: "./tablets.webp", alt: "Tablets" },
            { src: "/img_mountains.jpg", alt: "Mountains" },
          ].map((image, index) => (
            <div key={index} className={styles.gallery}>
              <a href={image.src} target="_blank" rel="noopener noreferrer">
                <img src={image.src} alt={image.alt} />
              </a>
              <div className={styles.desc}>{image.alt}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
