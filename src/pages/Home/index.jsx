import { useState } from "react";

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { MenuMobile } from "../../components/MenuMobile";
import { Card } from "../../components/Card";

import imageDish from '../../assets/ravanello-300.png';
import foots200 from '../../assets/foots-200.svg';

export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Container>

      <MenuMobile
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Header onOpenMenu={() => setMenuIsOpen(true)} />

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
        <Card
          dish={{
            image: imageDish,
            name: "Torradas de Parma",
            description: "Presunto de parma e rúcula em um pão com fermentação natural.",
            price: "25,97"
          }}
        />
      </main>
      <Footer />
    </Container>
  )
}