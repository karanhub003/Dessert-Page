import React from "react";
import close from "../assets/icon-remove-item.svg";
import "./CartCard.css";
import treeImg from "../assets/icon-carbon-neutral.svg";

export default function CartCard() {
  return (
    <div className="cartContainer">
      <h2>Your Cart(2)</h2>
      <div className="cartProductContainer">
         <div className="cartProduct">
          <div className="cartRightBox">
            <p>Waffle</p>
            <div className="cartProductInfo">
              <p>1x</p>
              <p>@7.50</p>
              <p>$7.50</p>
            </div>
          </div>
          <div className="cartLeftBox">
            <img src={close} alt="" />
          </div>
           </div>
         <div className="cartProduct">
          <div className="cartRightBox">
            <p>Waffle</p>
            <div className="cartProductInfo">
              <p>1x</p>
              <p>@7.50</p>
              <p>$7.50</p>
            </div>
          </div>
          <div className="cartLeftBox">
            <img src={close} alt="" />
          </div>
           </div>
      </div>
      <div className="orderTotal">
        <p>
          <b>Order Total:</b>
        </p>
        <p>
          <b>$199</b>
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
