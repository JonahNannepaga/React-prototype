import React, { useState, useEffect } from "react";
import "./App.css";
import { Heading } from "./components/SectionHeader";

function ProductDetail({ match }) {
  useEffect(() => {
    fetchProduct();
  }, []); // eslint-disable-next-line

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
    <div className="products-detail">
      <Heading title={item.name}></Heading>
      <img src={item.image} alt={item.name} />
      <h3>Price: {item.price}$</h3>
      <p>{item.description}</p>
    </div>
  );
}

export default ProductDetail;
