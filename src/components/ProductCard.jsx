import React from 'react'
import './ProductCard.css'
import waffleImg from '../assets/image-waffle-desktop.jpg'
import cartImg   from '../assets/icon-add-to-cart.svg'

export default function ProductCard({product}) {
  console.log(product);
  return (
    <>
    <div className='ProductCard'>
      <div className="imgBox">
        <img className='ProdImg' src={waffleImg} alt="" />
        <div className="addToBtn">
          <img src={cartImg} alt="" />
          <h3>Add to cart</h3>
        </div>
      </div>
      <p className='productName'>{product.category}</p>
      <h2 className='productTitle'>{product.name}</h2>
      <p className='productPrice'><b>${product.price}</b></p>
    </div>

    </>
  )
}

