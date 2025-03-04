import React from 'react'
import Navbar from '../Components/Navbar'
import Category from '../Components/Category'
import FoodItems from '../Components/FoodItems'
import Cart from '../Components/cart'

const Home = () => {
  return<>
  <Navbar/>
  <Category/>
  <FoodItems/>
  <Cart/>
  </>
}

export default Home