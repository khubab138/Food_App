import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart, incrementQty, decrementQty } from "../Redux/slices/CartSlices";

const ItemsCart = ( {name, id, price, img, qty}) => {

const dispatch = useDispatch()

    return (
        <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
               <MdDeleteOutline onClick={()=>{
                dispatch(removeFromCart({id}))
               }} className="absolute right-7 text-gray-500 cursor-pointer hover:bg-red-500 hover:text-white hover:rounded-full hover:border-red-500 "/>
            <img
                src={img}
                alt=""
                className="w-[50px] h-[50px]"
            />
            <div className="leading-5">
                <h2 className="font-bold text-gray-500">{name}</h2>

                <div className="flex justify-between " >
                    <span className="text-green-500 font-semibold">RS {price}</span>
                    <div className="flex absolute right-7 m3">
                        <CiCircleMinus onClick={()=>{ qty >= 1? dispatch(decrementQty(id)): qty=1}} className=" rounded-full text-gray-500 hover:text-white hover:bg-red-500 hover:border-none p-1  text-3xl transition ease-linear cursor-pointer" />
                        <span>{qty}</span>
                        <CiCirclePlus className=" rounded-full text-gray-500 hover:text-white hover:bg-green-500 hover:border-none p-1  text-3xl transition ease-linear cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemsCart;
