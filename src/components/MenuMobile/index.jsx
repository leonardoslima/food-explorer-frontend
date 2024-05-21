import { MagnifyingGlass, X } from "@phosphor-icons/react";

import { Input } from "../Input";
import { useAuth } from "../../hooks/auth";
import { Container, Nav, Title, Header, Button } from "./styles";

export function MenuMobile({ menuIsOpen, onCloseMenu, search }) {
  const { signOut, user } = useAuth();

  const isAdmin = user?.isAdmin || false;

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        <Button onClick={onCloseMenu}>
          <X />
        </Button>

        <Title>
          Menu
        </Title>
      </Header>

      <Nav>
        <div id="search">
          <MagnifyingGlass size={28} />
          <Input
            type="search"
            placeholder="Busque por pratos ou ingredientes"
            onChange={e => { search(e.target.value) }}
          />
        </div>

        {isAdmin && (
          <a onClick={signOut}>
            Novo Prato
          </a>
        )}

        <a onClick={signOut}>
          Sair
        </a>
      </Nav>
    </Container>
  );
}