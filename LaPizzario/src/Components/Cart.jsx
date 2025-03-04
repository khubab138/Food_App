import React from "react";
import { IoMdClose } from "react-icons/io";
import ItemsCart from "./ItemsCart";


const Cart = () => {
  return (
    <>
      <div className="fixed right-0 top-0 lg:w-[20vw] w-full h-full p-5 bg-white ">
   
        <div className="flex justify-between items-center my-3">
          <span className="text-xl text-gray-500 font-bold">My order</span>
          <IoMdClose className=" cursor-pointer border-2 border-gray-700 text-gray-700 rounded text-xl hover:text-red-500 hover:border-red-500" />
        </div>

            <ItemsCart/>
            <ItemsCart/>
            <ItemsCart/>

        <div className="absolute bottom-0 ">
          <h3 className="font-semibold text-gray-500">items: </h3>
          <h3 className="font-semibold text-gray-500">Total: </h3>
          <hr className="w-[90vw] lg:w-[17vw] my-2" />
          <button className="mb-10 bg-green-500 font-bold text-white p-2 rounded-lg w-[90vw] lg:w-[17vw]">
            CheckOut
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
