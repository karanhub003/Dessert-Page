import React from "react";
import "./AddToCart.css";
import "./ProductCard.css";
import cartImg from "../assets/icon-add-to-cart.svg";
import incrImg from "../assets/icon-increment-quantity.svg";
import decrImg from "../assets/icon-decrement-quantity.svg";

export default function AddToCart({ cart, setCart, product }) {
  const existingProduct = cart.find((item) => item.id === product.id);
  return (
    <>
      {!existingProduct ? (
        <div
          className="addToBtn"
          onClick={() => {
            setCart([...cart, { ...product, quantity: 1 }]);
            // console.log(cart);
          }}
        >
          <img src={cartImg} alt="" />
          <h3 className="addToBtnHeading">Add to cart</h3>
        </div>
      ) : (
        <div className="incDecBtn">
          <div
            className="circleBtn"
            onClick={() => {
              // IF quantity is 1 → remove product
              if (existingProduct.quantity === 1) {
                setCart(cart.filter((item) => item.id !== product.id));
              }

              // OTHERWISE decrease quantity
              else {
                setCart(
                  cart.map((item) =>
                    item.id === product.id
                      ? { ...item, quantity: item.quantity - 1 }
                      : item,
                  ),
                );
              }
            }}
          >
            <img className="iconImg" src={decrImg} alt="" />
          </div>
          <p>{existingProduct.quantity}</p>
          <div
            className="circleBtn"
            onClick={() => {
              setCart(
                cart.map((item) =>
                  item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item,
                ),
              );
            }}
          >
            <img className="iconImg" src={incrImg} alt="" />
          </div>
        </div>
      )}
    </>
  );
}
