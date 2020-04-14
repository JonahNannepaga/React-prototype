import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { Heading } from "./components/SectionHeader";

function Products() {
  useEffect(() => {
    fetchProducts();
  }, []);

  const [items, setItems] = useState([]);

  const fetchProducts = async () => {
    const data = await fetch("http://localhost:3005/productsdb");
    const items = await data.json();
    console.log(items);
    setItems(items);
  };
  return (
    <div>
      <Heading title="Products"></Heading>

      <div className="classcomp">
        {items.map((comp) => (
          <div key={comp.id} className="carditem">
            <h3>
              <Link to={`/products/${comp.id}`}>{comp.name}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
