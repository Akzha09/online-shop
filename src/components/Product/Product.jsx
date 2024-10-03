import React, { useState, useEffect } from "react";
import "./Product.scss";
import aa3 from "../../assets/image/aa3.png";
import aa4 from "../../assets/image/aa4.png";
import aa5 from "../../assets/image/aa5.png";
import axios from "axios";
import Star from "../../assets/svg/Star";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCount } from "../../redux/counter/countSlice";
import heart from "../../assets/svg/heart.svg";
import { addWish } from "../../redux/wishSlice/wishSlice";

const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/advertisement";

function Product() {
  const [products, setProducts] = useState([]);
  async function getProducts() {
    try {
      const res = await axios.get(API);
      console.log(res);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const dispatch = useDispatch();

  function checkPrice(p, d) {
    return p - (p * (d / 100)).toFixed(0);
  }

  console.log(products);
  return (
    <div className="sales container">
      <div className="flash">
        <div className="flash-left">
          <div className="today">
            <div className="text">
              <div className="red-line"></div>
              <p>Today’s</p>
            </div>
            <h3>Flash Sales</h3>
          </div>
          <div className="group">
            <div className="count">
              <p>Days</p>
              <h4>03:</h4>
            </div>
            <div className="count">
              <p>Hours</p>
              <h4>23:</h4>
            </div>
            <div className="count">
              <p>Minutes</p>
              <h4>19:</h4>
            </div>
            <div className="count">
              <p>Seconds</p>
              <h4>56</h4>
            </div>
          </div>
        </div>
        <div className="flash-icons">
          <img src={aa4} alt="" />
          <button onClick={() => dispatch(addCount())}>Ckice</button>
        </div>
      </div>
      <div className="products">
        {products.map((item) => (
          <div className="store">
              <div className="lik">

                <img onClick={() => dispatch(addWish(item))} src={heart} alt="" />
              </div>
            <Link to={`/product/${item.id}`}>

              <img src={item.imageUrl} alt="" />
            </Link>

            <h3>HAVIT HV-G92 Gamepad</h3>
            <div className="com">
              <p>${checkPrice(item.price, item.discount)}</p>
              <span>${item.discount}</span>
            </div>
            <div>
              {[1, 2, 3, 4, 5].map((x) => (
                <Star key={x} fill={item.star >= x ? "#FFAD33" : "gray"} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
