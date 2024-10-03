import React from 'react'
import "./Bag.scss"
import d1 from "../assets/image/d1.png"
import d2 from "../assets/image/d2.png"
import d3 from "../assets/image/d3.png"



function Bag() {
  return (
    <div className='bad container '>
      <div className='img'>
        <img src={d1} alt="" />
      </div>
      <div className='play'>
        <img src={d2} alt="" />
      </div>
      <div className='buut'>
        <button>Return To Shop</button>
        <button>Update Cart</button>
      </div>
      <div className='input'>
        <input type="text" placeholder='Coupon Code' />
        <button>Apply Coupon</button>
      </div>
      <div className='image'>
        <img src={d3} alt="" />
      </div>
    </div>
  )
}

export default Bag
