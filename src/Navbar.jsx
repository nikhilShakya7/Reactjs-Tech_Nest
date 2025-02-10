import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { items } from "./Data";

const Navbar = ({ setData }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(""); // State to track active category

  const filterByCat = (category) => {
    const element = items.filter((product) => product.category === category);
    console.log("Filtering by category:", element);

    setData(element);
    setActiveCategory(category); // Set the active category
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
    setSearch("");
  };
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navbar}`}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <span className={styles.logo}>TechNest</span>
          </Link>
          <form onSubmit={handleSubmit}>
            <input
              className="form"
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="search-container">
              <button type="submit">Search🔍</button>
            </div>
          </form>
        </div>
      </nav>

      <nav className={`navbar navbar-expand-lg ${styles.categoryNav}`}>
        <div className="container">
          <div className="navbar-nav">
            <div
              onClick={() => {
                setData(items);
                setActiveCategory("");
              }}
              className={`${styles.categoryItem} ${
                activeCategory === "" ? styles.active : ""
              }`}
            >
              All
            </div>
            <div
              onClick={() => filterByCat("mobiles")}
              className={`${styles.categoryItem} ${
                activeCategory === "mobiles" ? styles.active : ""
              }`}
            >
              Mobiles
            </div>
            <div
              onClick={() => filterByCat("laptops")}
              className={`${styles.categoryItem} ${
                activeCategory === "laptops" ? styles.active : ""
              }`}
            >
              Laptops
            </div>
            <div
              onClick={() => filterByCat("tablets")}
              className={`${styles.categoryItem} ${
                activeCategory === "tablets" ? styles.active : ""
              }`}
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
