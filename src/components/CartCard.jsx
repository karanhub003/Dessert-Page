import React from "react";
import close from "../assets/icon-remove-item.svg";
import "./CartCard.css";
import treeImg from "../assets/icon-carbon-neutral.svg";

export default function CartCard({ cart,setCart }) {
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <div className="cartContainer">
      <h2>Your Cart({cart.length})</h2>
      <div className="cartProductContainer">
        {cart.map((item) => (
          <div className="cartProduct">
            <div className="cartRightBox">
              <p>{item.name}</p>
              <div className="cartProductInfo">
                <p>{item.quantity}x</p>
                <p>@{item.price}</p>
                <p>${item.price * item.quantity}</p>
              </div>
            </div>
            <div className="cartLeftBox">
              <img
                src={close}
                alt=""
                onClick={() => {
                  const updatedCart = cart.filter((cartItem) => {
                    return cartItem.id !== item.id;
                  });

                  setCart(updatedCart);
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="orderTotal">
        <p>
          <b>Order Total:</b>
        </p>
        <p>
          <b>${totalPrice}</b>
        </p>
      </div>
      <div className="ecoTree">
        <div className="treeIcon">
          <img src={treeImg} alt="" />
        </div>
        <p>
          This is a <b>carbon-neutral</b> delivery
        </p>
      </div>
      <div className="orderNowBox">
        <button className="orderBtn">Order Now</button>
      </div>
    </div>
  );
}
