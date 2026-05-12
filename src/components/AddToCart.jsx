import React from "react";
import "./AddToCart.css";
import "./ProductCard.css";
import cartImg from "../assets/icon-add-to-cart.svg";
import incrImg from "../assets/icon-increment-quantity.svg";
import decrImg from "../assets/icon-decrement-quantity.svg";

export default function AddToCart({ quantity, setQuantity }) {
  return (
    <>
      {quantity === 0 ? (
        <div className="addToBtn" onClick={()=>{
          setQuantity(1)
        }}>
          <img src={cartImg} alt="" />
          <h3 className="addToBtnHeading">Add to cart</h3>
        </div>
      ) : (
        <div className="incDecBtn">
          <div className="circleBtn" onClick={()=>{
            setQuantity(quantity-1)
          }}>
            <img className="iconImg" src={decrImg} alt="" />
          </div>
          <p>{quantity}</p>
          <div className="circleBtn" onClick={()=>{
            setQuantity(quantity+1)
          }}>
            <img className="iconImg" src={incrImg} alt="" />
          </div>
          
        </div>
      )}
    </>
  );
}
