import React from 'react'
import "./ItemProduct.scss"
import { useParams } from 'react-router-dom'
import v1 from "../../assets/image/v1.png"
import v2 from "../../assets/image/v2.png"
import v3 from "../../assets/image/v3.png"
import v4 from "../../assets/image/v4.png"
import v5 from "../../assets/image/v5.png"
import v6 from "../../assets/image/v6.png"
import v7 from "../../assets/image/v7.png"
import v8 from "../../assets/image/v8.png"
import v9 from "../../assets/image/v9.png"
import v10 from "../../assets/image/v10.png"
import g1 from "../../assets/image/g1.png"









function ItemProduct() {
    const {id} = useParams()
  return (
    <div className='box container'>
      
        <div className='text'>

        <h1>Account</h1>
        /
        <h2>Gaming</h2>
        /
        <h3>Havic HV G-92 Gamepad</h3>
        </div>


          <div className='mini'>
            <img src={v2} alt="" />
            <img className='z1' src={v3} alt="" />
            <img className='z2' src={v4} alt="" />
            <img className='z3' src={v5} alt="" />

          </div>
      
        <div className='jostik'>
          <img src={v1} alt="" />
        </div>

        <div className='inna'>
          <div className='price'>
            <h1>Havic HV G-92 Gamepad</h1>
            <img src={v6} alt="" />
            <h2>$192.00</h2>
            <p>PlayStation 5 Controller Skin High quality vinyl with air <br /> channel adhesive for easy bubble free install & mess <br /> free removal Pressure sensitive.</p>
            <div className='pp'></div>
          <img className='ooo' src={v7} alt="" />
            
          </div>
          <div className='qqq'>
            
          <img className='ggg' src={v8} alt="" />
          </div>
          <div className='AKZ'>

          <img src={v9} alt=""  /> 
          <button className='uuu'>Buy Now</button>
          <div className='v10'>

           <img src={v10} alt="" />
          </div>
          <div className='image'>
            <img src={g1} alt="" />
          </div>

          </div>
        </div>
    </div>
  )
}

export default ItemProduct
