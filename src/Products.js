import React, { useState, useEffect } from "react";

import "./App.css";
import { Heading } from "./components/SectionHeader";

function Products() {
  useEffect(() => {
    fetchProducts();
  }, []);

  const [items, setItems] = useState([]);

  const fetchProducts = async () => {
    const data = await fetch("http://localhost:3004/productsdb");
    const items = await data.json();
    console.log(items);
    setItems(items);
  };
  return (
    <div>
      <Heading title="Products"></Heading>

      <div className="classcomp">
        {items.map((item) => (
          <div key={item.id} className="carditem">
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
