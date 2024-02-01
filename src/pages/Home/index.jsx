import { AddIngredients } from "../../components/AddIngredients";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export function Home() {
  return (
    <>
      <Header />
      <div>
        <h2>Home</h2>
        <AddIngredients />
      </div>
      <Footer />
    </>
  )
}