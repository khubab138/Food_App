import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemsCart from "./ItemsCart";
import { useSelector } from 'react-redux'
import { IoCartOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { MdTranslate } from "react-icons/md";
import { nanoid } from "@reduxjs/toolkit";


const Cart = () => {

 const [active, setActive] = useState(true)

const cartItems = useSelector((state)=> state.cart.cart)


  return (
    <>
      <div className={`fixed right-0 top-0 lg:w-[20vw] w-full h-full p-5 bg-white  
        ${active? "translate-x-0" : "translate-x-full" } transition-all duration-500 z-50 `}>
   
        <div className="flex justify-between items-center my-3">
          <span className="text-xl text-gray-500 font-bold">My order</span>
          <IoMdClose onClick={()=>{setActive(!active)}} className=" cursor-pointer border-2 border-gray-700 text-gray-700 rounded text-xl hover:text-red-500 hover:border-red-500" />
        </div>

          {cartItems.length > 0 ? cartItems.map((food)=>{
           return <ItemsCart key={food.id} id={food.id} name={food.name} price={food.price} img={food.img} qty={food.qty} />

          }) : <h2 className="font-semibold text-gray-500 text-center">Your Cart Is Empty</h2> }
          

        <div className="absolute bottom-0 ">
          <h3 className="font-semibold text-gray-500">items: </h3>
          <h3 className="font-semibold text-gray-500">Total: </h3>
          <hr className="w-[90vw] lg:w-[17vw] my-2" />
          <button  className="mb-10 bg-green-500 font-bold text-white p-2 rounded-lg w-[90vw] lg:w-[17vw]">
            CheckOut
          </button>
        </div>
      </div>
        <FaShoppingCart 
        onClick={()=>{setActive(!active)}}
        className="rounded-full bg-white text-5xl shadow-md p-3 fixed bottom-20 right-8" /> 
    </>
  );
};

export default Cart;
