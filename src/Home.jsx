import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "./Home.module.css"; // Import CSS module

const Home = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
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
        Go Shopping
      </button>
    </div>
  );
};

export default Home;
