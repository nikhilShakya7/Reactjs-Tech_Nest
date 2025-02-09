import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Shop from "./Shop";
import { items } from "./Data";

const App = () => {
  const [data, setData] = useState([...items]);

  return (
    <Router>
      <Navbar setData={setData} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop items={data} />} />{" "}
      </Routes>
    </Router>
  );
};

export default App;
