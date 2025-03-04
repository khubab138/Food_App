import React from "react";
import { IoMdStar } from "react-icons/io";

const Card = () => {
  return (
    <div className="font-bold w-[250px] p-5 flex flex-col rounded-lg bg-white gap-2" >
      <img
        src="ttps://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
        alt=""
        className="w-auto h-[130px] hover:scale-110 cursor-grab ease-in-out transition-all duration-500"
      />
      <div className="text-sm flex justify-between  ">
        <h2>Onion Pizza</h2>
        <span className="text-green-500">Rs 180</span>
      </div>
      <p className="font-normal text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, explicabo.</p>
      <div className="flex justify-between ">
        <span className="flex justify-center items-center">
        <IoMdStar className="mr-1 text-yellow-400" /> 4.5
        </span>
        <button className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm" >Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
