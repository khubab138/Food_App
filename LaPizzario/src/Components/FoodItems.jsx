import React from "react";
import Card from "./Card";
import FoodData from "../assets/FoodData";

const FoodItems = ({id, name, price, desc, rating, img}) => {
  return (
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
          />
        );
      })}
    </div>
  );
};

export default FoodItems;
