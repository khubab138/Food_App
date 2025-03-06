import React from "react";
import Card from "./Card";
import FoodData from "../assets/FoodData";
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from "react-redux";

const FoodItems = ({ id, name, price, desc, rating, img }) => {
  const search = useSelector((state)=> state.search.search)

  const category = useSelector((state) => state.category.category);

  const handleToast = (n) => toast.success(`Added ${n}`);

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start m-20">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return food.category === category && food.name.toLowerCase().includes(search.toLowerCase());
          }
        }).map((food) => (
          <Card
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
};

export default FoodItems;
