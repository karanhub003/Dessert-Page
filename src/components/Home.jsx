import React, { useState } from 'react'
import './Home.css'

import ProductList from './ProductList'
import CartCard from './CartCard'

export default function () {
  const [cart,setCart]=useState([])
  console.log(cart);
  return (
  <>
  <div className="leftSide">
    <h1 className='Heading'>Desserts</h1>
    <ProductList cart={cart} setCart={setCart}/>
  </div>
  <div className="rightSide">
    <CartCard cart={cart} setCart={setCart}/>
  </div>
  </>
  )
}
