import React, { useContext, useEffect, useState } from "react";
import "./foodList.css";
import { GoTriangleDown } from "react-icons/go";
import Image1 from "../../assets/chickenbiryanibowltop.jpg";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { LiaAngleRightSolid } from "react-icons/lia";
import { FaRegStar } from "react-icons/fa";
import ContextData from "../../data/DataContext";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaArrowRightLong   } from "react-icons/fa6";
import {Link} from 'react-router-dom'

function FoodList() {
  const context = useContext(ContextData);
  const { foodListData } = context;
  const [foodAdded, setFoodAdded] = useState(2)
  const dishesData = foodListData.dishes;

  return (
    <div className="foodList">
      <div className="container">
        <hr />

        {/* heading */}
        <div className="menu">
          <div className="recommended">
            <h1>Recommended</h1>
            <GoTriangleDown />
          </div>
          <button>Menu</button>
        </div>

        {/*  food description */}
        {dishesData &&
          dishesData.map((dishItem) => {
            return (

              <div key={dishItem.id} className="foodArray">
             <div className="foodDetails">
            
        
                <div className="dishDesc">
                  <div className="dishName">
                    <h2>{dishItem.name}</h2>
                    <div className="vegetarian">
                      <p>.</p>
                    </div>
                    <div className="rating">
                      <p>{dishItem.rating}</p>
                      <FaRegStar className="star" />
                    </div>
                  </div>
                  <div className="detailIngredient">
                    {dishItem.equipments.map((item, i) => {
                      return (
                        <div key={`${dishItem.id}-${i}`} className="equipments">
                          <CgSmartHomeRefrigerator className="fridge" />
                          <p>{item}</p>
                        </div>
                      );
                    })}
                    {/* <div className="lineHeight"></div> */}
                    <div className="ingredients">
                      <h5>Ingredients</h5>
                      <Link to={`/productPage/${dishItem.id}`}>
                      <div className="veiwList">
                        <p>veiw list</p>
                        <LiaAngleRightSolid  className="veiw"/>
                      </div>
                      </Link>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{dishItem.description}</p>
                  </div>
                </div>

                {/* left side image  */}
                <div className="dishImage">
                  <img src={dishItem.image} alt="img..." />
                  <div className="add"
                  onClick={() => setFoodAdded(prev => prev+1)}>
                    <div className="span">
                      <span>+</span>
                    </div>
                    <p> Add </p>
                  </div>
                </div>

              </div>
              <hr style={{width:"90%"}}/>
             </div>
            );
          })}
      </div>

      {/* product added description */}
      <div className="notify">
         <IoFastFoodOutline />
         <p>{foodAdded} food items selected</p>
         <FaArrowRightLong  />
      </div>
    </div>
  );
}

export default FoodList;
