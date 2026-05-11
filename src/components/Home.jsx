import React from 'react'

import ProductList from './ProductList'
import CartCard from './CartCard'

export default function () {
  return (
  <>
  <div className="leftSide">
    <h1>Dessert</h1>
    <ProductList/>
  </div>
  <div className="rightSide">
    <CartCard/>
  </div>
  </>
  )
}
