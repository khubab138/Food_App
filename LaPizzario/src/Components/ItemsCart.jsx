import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
const ItemsCart = () => {
    return (
        <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
               <MdDeleteOutline className="absolute right-7 text-gray-500 cursor-pointer hover:bg-red-500 hover:text-white hover:rounded-full hover:border-red-500 "/>
            <img
                src=" https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
                alt=""
                className="w-[50px] h-[50px]"
            />
            <div className="leading-5">
                <h2 className="font-bold text-gray-500">onion pizza</h2>

                <div className="flex justify-between " >
                    <span className="text-green-500 font-semibold">RS 580</span>
                    <div className="flex absolute right-7 m3">
                        <CiCirclePlus className=" rounded-full text-gray-500 hover:text-white hover:bg-green-500 hover:border-none p-1  text-3xl transition ease-linear cursor-pointer" />
                        <span>1</span>
                        <CiCircleMinus className=" rounded-full text-gray-500 hover:text-white hover:bg-red-500 hover:border-none p-1  text-3xl transition ease-linear cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemsCart;
