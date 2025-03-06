import React from "react";
import { useDispatch } from "react-redux";
import {setSearch} from '../Redux/slices/SearchSlice'
const Navbar = () => {

  const dispatch = useDispatch()
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between py-3 mx-8 mb-10">
        <div>
          <h5 className="text-xl font-bold text-gray-600">{new Date().toUTCString().slice(0, 16)}</h5>
          <h1 className="text-5xl font-bold flex">LaPizzario<img className="w-12 h-12" src="\src\assets\Logo.png" alt="" /></h1>
        </div>
        <div>
          <input
            type="text"
            autoComplete="off"
            name="search"
            id=""
            placeholder="Search Here"
            onChange={(e)=> dispatch(setSearch(e.target.value))}
            className="p-3 border border-gray-300 text-sm rounded-lg outline-none w-full ld:w(25vw)"

          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
