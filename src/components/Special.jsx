import React from "react";
import { Routes, Route } from "react-router-dom";
import SpecialMeal from "./SpecialMeal";
import Recipe from "./Recipe";
const Special = () => {
  return (
    <>
      <Routes>
        <Route path="/myNewRecipe" element={<SpecialMeal />} />
        <Route path="/myNewRecipe:MealId" element={<Recipe />} />
      </Routes>
    </>
  );
};

export default Special;
