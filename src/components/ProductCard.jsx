import React, { useState } from "react";
import "./ProductCard.css";

import AddToCart from "./AddToCart";

export default function ProductCard({ product, cart, setCart }) {
  return (
    <>
      <div className="ProductCard">
        <div className="imgBox">
          <img className="ProdImg" src={product.image.desktop} alt="" />
          <AddToCart cart={cart} setCart={setCart} product={product} />
        </div>
        <p className="productName">{product.category}</p>
        <h2 className="productTitle">{product.name}</h2>
        <p className="productPrice">
          <b>${product.price}</b>
        </p>
      </div>
    </>
  );

  function newFunction() {
    console.log(product);
  }
}
