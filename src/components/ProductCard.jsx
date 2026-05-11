import React, { useState } from 'react'
import './ProductCard.css'

import AddToCart from './AddToCart';

export default function ProductCard({product}) {
const [quantity,setQuantity]=useState(0)
  return (
    <>
    <div className='ProductCard'>
      <div className="imgBox">
        <img className='ProdImg' src={product.image.desktop} alt="" />
        <AddToCart quantity={quantity} setQuantity={setQuantity} />
      </div>
      <p className='productName'>{product.category}</p>
      <h2 className='productTitle'>{product.name}</h2>
      <p className='productPrice'><b>${product.price}</b></p>
    </div>

    </>
  )

  function newFunction() {
    console.log(product);
  }
}

