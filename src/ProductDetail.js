import React, { useState, useEffect } from "react";
import "./App.css";
import { Heading } from "./components/SectionHeader";

function ProductDetail({ match }) {
  useEffect(() => {
    fetchProduct();
  }, []);

  const [item, setItem] = useState({
    name: "",
  });

  const fetchProduct = async () => {
    const fetchProduct = await fetch(
      `http://localhost:3005/productsdb?id=${match.params.id}`
    );
    const item = await fetchProduct.json();
    setItem(item[0]);
  };
  return (
    <div>
      <Heading title="Products Detail Page"></Heading>
      <h3>{item.name} Details Page</h3>
    </div>
  );
}

export default ProductDetail;
