import { X } from "@phosphor-icons/react";

import { Container, Nav, Title, Header, Button } from "./styles";

export function MenuMobile({ menuIsOpen, onCloseMenu }) {
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
        <a href="#">
          Sair
        </a>
      </Nav>
    </Container>
  );
}