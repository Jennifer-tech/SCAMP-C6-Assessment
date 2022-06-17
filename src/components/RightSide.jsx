import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./RightSide.css";

const RightSide = () => {
  const [value, setValue] = useState(0)

  const minus = () => setValue(value - 1);
  const add = () => setValue(value + 1);

  return (
    <div className="rightSideWrapper">
      <div className="rightSideBody">
        <div className="companyName">SNEAKER COMPANY</div>
        <div className="Edition">Fall Limited Edition Sneakers</div>
        <div className="textBody">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </div>
        <div className="priceCover">
        <div className="price">
          <div className="Amount">$125.00</div>
          <div className="discountCover">
            <div className="discount">50%</div>
          </div>
        </div>
          <div className="slashedAmount">$250.00</div>
        </div>
        
        
        <div className="ending">
          <div className="sign">
            <div className="minus" onClick={minus}>-</div>
            <div className="zero">{value}</div>
            <div className="plus" onClick={add}>+</div>
          </div>
          <div className="cart">
            <div className="cartCover">
              <FaShoppingCart className="icon" />
              Add to cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
// {/*
// <div class="main"
//     style={{marginTop: "60px"}}>
// <i
//         className='trash alternate outline icon'
//         style={{color: "red", marginTop: "7px"}}
//         onClick={() => props.clickHandler(id)}
//         ></i> */}
