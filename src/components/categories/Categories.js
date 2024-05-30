import React, { useContext, useState } from "react";
import "./categories.css";
import { LiaAngleLeftSolid } from "react-icons/lia";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";
import ContextData from "../../data/DataContext";
import Biryani from "../../assets/chickenbiryanibowltop.jpg";

function Categories() {
  const [isActive, setISActive] = useState("Italian");
  const context = useContext(ContextData);
  const { foodListData } = context;
  const popularDishes = foodListData.popularDishes;

  const dishTypes = ["Italian", "Indian", "Chinese", "Continental", "Indians"];

  const date = new Date();
  console.log("popularDishes", popularDishes);

  return (
    <div className="categories">
      <div className="container">
        <div className="select">
          <LiaAngleLeftSolid className="leftAngle" />
          <p> Select Dishes</p>
        </div>
        <div className="blackShade">
          <div className="schedule">
            <FaRegCalendarAlt />
            <h3> 21 may 2021 </h3>
            <p> | </p>
            <LuAlarmClock />
            <h3>03:30 pm-5.30pm</h3>
          </div>
        </div>
        <div className="dishType">
          {dishTypes.map((item) => (
            <span
              key={crypto.randomUUID()}
              className={`dishCategory ${isActive === item && "active"}`}
              onClick={() => setISActive((prev) => item)}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="popularDishes">
          <h2>Popular Dishes</h2>
          <div className="dishesList">
            {popularDishes &&
              popularDishes.map((dishItem) => {
                return (
                  <>
                    <div key={dishItem.id} className="dishItems ">
                      <img src={dishItem.image} />
                      <h3>{dishItem.name}</h3>
                    </div>
                   
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
