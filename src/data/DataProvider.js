import React, {  useEffect, useState } from "react";
import DataContext from "./DataContext";

function DataProvider({ children }) {
  const [foodListData, setFoodListData] = useState({});
  const [foodDetailsData, setFoodDetailsData] = useState({});

  useEffect(() => {
  //  foodList  homePage
      fetch('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/')
      .then(res => res.json())
      .then((data) => {
        setFoodListData(data)
      })
      .catch((err)=>{
        console.log(err)
      })


  },[])

  // foodDetails api
  useEffect(() => {
   
    fetch('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1')
    .then(res => res.json())
    .then((data) => {
      setFoodDetailsData(data)
    })
    .catch((err)=>{
      console.log(err)
    })


},[])

  return (
    <DataContext.Provider value={{ foodListData, foodDetailsData }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
