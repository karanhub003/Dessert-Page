import React from "react";
import ProductCard from "./ProductCard";
import "./ProductCard.css";
import ProductData from "../data/ProductData";
export default function ProductList() {
  return (
    <div className="ProductContainer">
      {ProductData.map((product, i) => (
        <ProductCard key={i} product={product} />
      ))}
    </div>
  );
}
