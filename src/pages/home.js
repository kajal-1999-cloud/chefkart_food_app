import React from 'react'
import Categories from '../components/categories/Categories'
import FoodList from '../components/foodList/FoodList'
function Home() {
  return (
    
          <div className='mainContainer'>
     <Categories/>
      <FoodList/>
      
    </div>
   
  )
}

export default Home