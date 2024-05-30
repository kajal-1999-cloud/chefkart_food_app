import React, { useContext } from "react";
import ProductData from "../../data/DataContext";
import { LiaAngleLeftSolid } from "react-icons/lia";
import { FaRegStar } from "react-icons/fa";
import { LuAlarmClock, LuRefrigerator } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { RiFridgeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Image1 from "../../assets/veges.png";
import "./productPage.css";

function ProductPage() {
  const context = useContext(ProductData);
  const { foodDetailsData } = context;

  let vegetablesArray = foodDetailsData?.ingredients?.vegetables || [];
  let spiceArray = foodDetailsData?.ingredients?.spices || [];
  let appliances = foodDetailsData?.ingredients?.appliances || [];

  console.log(foodDetailsData.ingredients?.vegetables);

  return (
    <div className="productPage">
      <div className="container">
        <Link to="/">
          <LiaAngleLeftSolid className="back"/>
        </Link>
        <div className="infoWrapper">
          <div className="basicInfo">
            <div className="heading">
              <p>{foodDetailsData.name}</p>

              <div className="rating">
                <span>4.2</span>
                <FaStar className="star" />
              </div>
            </div>
            <p className="desc grey">
              Mughlai Masala is a type of cookery developed in the Indian
              Subcontinent developed in the Indian Subcontinent by the imperial
              kitchens of the Mughlai Empire.
            </p>
              <div className="timer">
                <FaRegClock className="timeIcon" />
                <p>{foodDetailsData.timeToPrepare}</p>
              </div>
              <div className="line"></div>

          </div>

          <div className="Image">
            
            <img src={Image1} alt="img..." />
            
          </div>
        </div>
        <div className="detailWrapper">
          <div className="ingredients">
            <h2>Ingredients</h2>
            <p className=" grey" >For 2 people</p>
            <br/> <hr />
          </div>
          <div className="vege">
            <ul>
           
              <li>
                <h3>{`Vegetables (0${vegetablesArray.length})` }</h3>
                <GoTriangleDown />
              </li>
              {vegetablesArray &&
                vegetablesArray.map((detail) => {
                  return (
                    <li className="veg detail">
                      <p className=" grey" >{detail.name}</p>
                      <p className=" grey" >{detail.quantity}</p>
                    </li>
                  );
                })}
            </ul>
          </div>

          <div className="spice">
            
            <ul>
           
              <li>
                <h3>{`Spices (0${spiceArray.length})` }</h3>
                <GoTriangleDown />
              </li>
              {spiceArray &&
                spiceArray.map((spices) => {
                  return (
                    <li className="spice detail">
                      <p className=" grey" >{spices.name}</p>
                      <p className=" grey" >{spices.quantity}</p>
                    </li>
                  );
                })}
            </ul>
          </div>

          <div className="appliance">
            <h2>Appliances</h2>
            <div className="applianceList">
              {appliances &&
                appliances.map((info) => {
                  return (
                    <div className="applianceInfo">
                      <RiFridgeFill className="fridge" />
                      <p>{info.name ? (info.name) : "Refrigerator" }</p>
                    </div>
                  );
                })}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
