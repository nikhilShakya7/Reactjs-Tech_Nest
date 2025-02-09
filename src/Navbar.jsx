import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { items } from "./Data";

const Navbar = ({ setData }) => {
  const filterByCat = (category) => {
    const element = items.filter((product) => product.category === category);
    console.log("Filtering by category:", element);

    setData(element);
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navbar}`}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <span className={styles.logo}>TechNest</span>
          </Link>

          <input
            className="form"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div className="search-container">
            <button type="submit">Search🔍</button>
          </div>
        </div>
      </nav>

      <nav className={`navbar navbar-expand-lg ${styles.categoryNav}`}>
        <div className="container">
          <div className="navbar-nav">
            <div
              onClick={() => setData(items)}
              className={`${styles.categoryItem}`}
            >
              All
            </div>
            <div
              onClick={() => filterByCat("mobiles")}
              className={`${styles.categoryItem}`}
            >
              Mobiles
            </div>
            <div
              onClick={() => filterByCat("laptops")}
              className={styles.categoryItem}
            >
              Laptops
            </div>
            <div
              onClick={() => filterByCat("tablets")}
              className={styles.categoryItem}
            >
              Tablets
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
