import React from "react";
import Card from "./Card";
import FoodData from "../assets/FoodData";
import toast, { Toaster } from 'react-hot-toast';


const FoodItems = ({id, name, price, desc, rating, img}) => {
const handleToast = (n)=> toast.success(` Added ${n}`)
   
  return (<>


<Toaster
  position="top-center"
  reverseOrder={false}
/>
    <div className="flex flex-wrap gap-10 justify-center lg:justify-start m-20">
      {FoodData.map((food) => {
        return (
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
        );
      })}
    </div>
    </> );
};

export default FoodItems;
