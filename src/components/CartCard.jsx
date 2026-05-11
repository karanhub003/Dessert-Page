import React from 'react'
import close from '../assets/icon-remove-item.svg'

export default function CartCard() {
  return (
    <div className='cartContainer'>
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
        </div>
    </div>
  )
}
