import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navbar}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className={styles.logo}>TechNest</span>
        </Link>

        <input
          class="form"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <div className="search-container">
          <button type="submit">Search🔍</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
