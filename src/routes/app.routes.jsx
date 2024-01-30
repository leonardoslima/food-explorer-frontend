import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Dish } from "../pages/Dish";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Dish" element={<Dish />} />
    </Routes>
  )
}