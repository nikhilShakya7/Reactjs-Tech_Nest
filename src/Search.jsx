import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Shop from "./Shop";

const Search = () => {
  const { term } = useParams();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const data = items.filter((p) =>
      p.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredData(data);
  }, [term]);

  return (
    <>
      <Shop items={filteredData}></Shop>
    </>
  );
};

export default Search;
