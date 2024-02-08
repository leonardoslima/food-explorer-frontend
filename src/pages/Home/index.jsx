import { useState } from "react";

import { Container } from "./styles";

import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { MenuMobile } from "../../components/MenuMobile";

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

        <Section
          title="Refeições"
          cards={[
            <Card
              key={1}
              dish={{
                image: imageDish,
                name: "Torradas de Parma",
                description: "Presunto de parma e rúcula em um pão com fermentação natural.",
                price: "25,97"
              }}
            />,
            <Card
              key={2}
              dish={{
                image: imageDish,
                name: "Torradas de Parma",
                description: "Presunto de parma e rúcula em um pão com fermentação natural.",
                price: "25,97"
              }}
            />,
            <Card
              key={2}
              dish={{
                image: imageDish,
                name: "Torradas de Parma",
                description: "Presunto de parma e rúcula em um pão com fermentação natural.",
                price: "25,97"
              }}
            />,
            <Card
              key={2}
              dish={{
                image: imageDish,
                name: "Torradas de Parma",
                description: "Presunto de parma e rúcula em um pão com fermentação natural.",
                price: "25,97"
              }}
            />,
            <Card
              key={2}
              dish={{
                image: imageDish,
                name: "Torradas de Parma",
                description: "Presunto de parma e rúcula em um pão com fermentação natural.",
                price: "25,97"
              }}
            />
          ]}
        ></Section>

        <Section
          title="Sobremesas"
          cards={[
            <Card
              key={1}
              dish={{
                image: imageDish,
                name: "Torradas de Parma",
                description: "Presunto de parma e rúcula em um pão com fermentação natural.",
                price: "25,97"
              }}
            />,
          ]}
        ></Section>

      </main>
      <Footer />
    </Container >
  )
}