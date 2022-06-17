import React, { useState } from "react";
import "./LeftSide.css";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import sneakers1 from "../assets/image/sneakers1.jpg";
import sneakers2 from "../assets/image/sneakers2.jpg";
import sneakers3 from "../assets/image/sneakers3.jpg";
import sneakers4 from "../assets/image/sneakers4.jpg";

const LeftSide = () => {
  const [active, setActive] = useState(1);
  const [mainImage, setmainImage] = useState(sneakers1);

  const images = {
    1: sneakers1,
    2: sneakers2,
    3: sneakers3,
    4: sneakers4
  };

  const change = (value) => {
    setActive(value);
    setmainImage(images[value]);
  };

  const arrowChange = (sign) => {
    if (sign === '+') {
      if (active === 4) {
        setActive(1);
        setmainImage(images[1]);
        return;
      }

      setActive(active + 1);
      setmainImage(images[active + 1]);
      return;
    }

    if (active === 1) {
      setActive(4);
      setmainImage(images[4]);
      return;
    }
    setActive(active - 1);
    setmainImage(images[active - 1]);
  };

  return (
    <div className="imageWrapper">
      <div className="imageArrow">
        <IoIosArrowDropleft className="leftArrow" onClick={() => arrowChange('-')} />
        <div className="mainImage">
          <img src={mainImage} alt="" />
        </div>
        <IoIosArrowDropright className="rightArrow" onClick={() => arrowChange('+')} />
      </div>
      <div className="otherImages">
        <div
          className={`subImage ${active === 1 ? "active" : ""}`}
          onClick={() => change(1)}
        >
          <img src={sneakers1} alt="" />
        </div>
        <div
          className={`subImage ${active === 2 ? "active" : ""}`}
          onClick={() => change(2)}
        >
          <img src={sneakers2} alt="" />
        </div>
        <div
          className={`subImage ${active === 3 ? "active" : ""}`}
          onClick={() => change(3)}
        >
          <img src={sneakers3} alt="" />
        </div>
        <div
          className={`subImage ${active === 4 ? "active" : ""}`}
          onClick={() => change(4)}
        >
          <img src={sneakers4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
