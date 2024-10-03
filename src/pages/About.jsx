import React from 'react'
import "./About.scss"
import aa6 from "../assets/image/aa6.png"
import aa7 from "../assets/image/aa7.png"
import aa8 from "../assets/image/aa8.png"
import aa9 from "../assets/image/aa9.png"
import aa10 from "../assets/image/aa10.png"
import bb1 from "../assets/image/bb1.png"
import bb2 from "../assets/image/bb2.png"
import bb3 from "../assets/image/bb3.png"
import bb4 from "../assets/image/bb4.png"







function About() {
  return (
    <div className='box container'>
    
      <div className='content'>
        <p>Home/About</p>

         <h1>Our Story</h1>
        <h6>Launced in 2015, Exclusive is South Asia’s premier online shopping <br />
           makterplace with an active presense in Bangladesh. Supported <br />
            by wide range of tailored marketing, data and service solutions,<br />
             Exclusive has 10,500 sallers and 300 brands and serves 3 <br />
              millioons customers across the region. </h6>
        <span>Exclusive has more than 1 Million products to offer, growing at a <br />
         very fast. Exclusive offers a diverse assotment in categories <br />
          ranging  from consumer.</span> 


          <div className='title'>
          <img className='b1' src={aa6} alt="" />
          <div className='one'>
          <img  src={aa7} alt="" />
          <h1>10.5k </h1>
           <p>Sallers active our site</p>
          </div>
          <div className='too'>
          <img  src={aa8} alt="" />
          <h1>33k</h1>
           <p>Mopnthly Produduct Sale</p>
          </div> <div className='tri'>
          <img  src={aa9} alt="" />
          <h1>45.5k</h1>
           <p>Customer active in our site</p>
          </div> <div className='foo'>
          <img  src={aa10} alt="" />
          <h1>25k </h1>
           <p>Anual gross sale in our site</p>
          </div>

      </div>
    <div className='people'>

              <img src={bb1} alt="" />
    </div>
    <div className='comada'>

    <div className='x1'>
          <img  src={bb2} alt="" />
          <h1>FREE AND FAST DELIVERY</h1>
           <p>Free delivery for all orders over $140</p>
          </div>
          <div className='x2'>
          <img  src={bb3} alt="" />
          <h1>24/7 CUSTOMER SERVICE</h1>
           <p>Friendly 24/7 customer support</p>
          </div>
          <div className='x3'>
          <img  src={bb4} alt="" />
          <h1>MONEY BACK GUARANTEE</h1>
           <p>We reurn money within 30 days</p>
          </div>
    </div>
   </div>
    </div>
  )
}

export default About
