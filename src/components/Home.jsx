import React from 'react'
import './Home.css'

import ProductList from './ProductList'
import CartCard from './CartCard'

export default function () {
  return (
  <>
  <div className="leftSide">
    <h1 className='Heading'>Desserts</h1>
    <ProductList/>
  </div>
  <div className="rightSide">
    <CartCard/>
  </div>
  </>
  )
}
