import { useState } from "react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { MenuMobile } from "../../components/MenuMobile";
import { Card } from "../../components/Card";

import imageDish from '../../assets/ravanello-300.png';

export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      <MenuMobile
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Header onOpenMenu={() => setMenuIsOpen(true)} />
      <div>
        <h2>Home</h2>

        <Card
          dish={{
            image: imageDish,
            name: "Torradas de Parma",
            description: "Presunto de parma e rúcula em um pão com fermentação natural.",
            price: "25,97"
          }}
        />
      </div>
      <Footer />
    </>
  )
}