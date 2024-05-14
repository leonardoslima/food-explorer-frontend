import { useEffect, useState } from "react";

import { Container } from "./styles";

import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { MenuMobile } from "../../components/MenuMobile";

import foots200 from '../../assets/foots-200.svg';
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function Home() {
  const { user } = useAuth();

  const isAdmin = user?.isAdmin || false;

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [dishes, setDishes] = useState([])
  const [search, setSearch] = useState("")

  const categories = ["Entrada", "Refeição", "Pratos principais"].sort();

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?search=${search}`);
      setDishes(response.data);
    }
    fetchDishes();
  }, [search])

  return (
    <Container>
      <MenuMobile
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Header search={setSearch} onOpenMenu={() => setMenuIsOpen(true)} />

      <main>
        <div>
          <picture>
            <source srcSet={foots200} />
            <img src={foots200} alt="" />
          </picture>
          <div>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>

        {
          categories.map(category => (
            dishes.filter(dish => dish.category === category).length > 0 && (
              <Section
                key={category}
                title={category}
                cards={dishes.filter(dish => dish.category === category).map((dish, index) => (
                  <Card
                    key={index}
                    isAdmin={isAdmin}
                    dish={{
                      id: dish.id,
                      photo: dish.photo,
                      name: dish.name,
                      description: dish.description,
                      price: dish.price
                    }}
                  />
                ))}
              />
            )
          ))}
      </main>
      <Footer />
    </Container >
  )
}