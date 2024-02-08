import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Dish } from "../pages/Dish";
import { NewDish } from "../pages/NewDish";
import { DishEdit } from "../pages/DishEdit";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish/:id" element={<Dish />} />
      <Route path="/newDish" element={<NewDish />} />
      <Route path="/dishEdit/:id" element={<DishEdit />} />
    </Routes>
  )
}