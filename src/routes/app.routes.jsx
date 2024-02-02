import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Dish } from "../pages/Dish";
import { NewDish } from "../pages/NewDish";
import { DishEdit } from "../pages/DishEdit";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Dish" element={<Dish />} />
      <Route path="/NewDish" element={<NewDish />} />
      <Route path="/DishEdit" element={<DishEdit />} />
    </Routes>
  )
}