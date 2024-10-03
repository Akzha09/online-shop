import React from 'react'
import { Link } from 'react-router-dom'
Link
import "./Love.scss"
import g2 from "../../assets/image/g2.png"
import g3 from "../../assets/image/g3.png"
import g4 from "../../assets/image/g4.png"
import l1 from "../../assets/image/l1.png"
import l2 from "../../assets/image/l2.png"
import l3 from "../../assets/image/l3.png"
import glav from "../../assets/image/glav.png"
import { useSelector } from 'react-redux'




function Love() {
  const {items} = useSelector((state) => state.wishlist)
  return (
    <div className='box container'>
        {
          items.map((data) => (

          <div className='cotent'>
            <img className='korz' src={g4} alt="" />
          <div className='Add'>
            <div className='price'>-35%</div>
            <img src={g2} alt="" /> 
            </div>
            <button>Add To Card</button>
            <h1>Gucci duffle bag</h1>
            <p>$960</p>
            <h2>$1160</h2>
          </div> 
          ))
        }
      {/* <img className='mus' src={g3} alt="" /> */}


    </div>
  )
}

export default Love
