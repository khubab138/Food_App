import React from "react";
import Card from "./Card";
import FoodData from "../assets/FoodData";

const FoodItems = () => {
  return (
    <div>
      {FoodData.map((food) => {
        return (
          <Card
          />
        );
      })}
    </div>
  );
};

export default FoodItems;
