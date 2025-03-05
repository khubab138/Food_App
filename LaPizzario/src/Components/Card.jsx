import React from "react";
import { IoMdStar } from "react-icons/io";
import FoodItems from "./FoodItems";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/slices/CartSlices";

const Card = ({ id, name, price, desc, rating, img, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className="font-bold w-[250px] p-5 flex flex-col rounded-lg bg-white gap-2">
      <img
        src={img}
        alt=""
        className="w-auto h-[130px] hover:scale-110 cursor-grab ease-in-out transition-all duration-500"
      />
      <div className="text-sm flex justify-between  ">
        <h2>{name}</h2>
        <span className="text-green-500">Rs {price}</span>
      </div>
      <p className="font-normal text-sm">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between ">
        <span className="flex justify-center items-center">
          <IoMdStar className="mr-1 text-yellow-400" /> {rating}
        </span>
        <button  onClick={()=>{dispatch(
          addToCart({id, name, price, rating, img, qty:1}))
        handleToast(name);
        }}
        className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm">

          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
