import { Container, Content } from "./styles";

export function Section({ title, cards }) {
  return (
    <Container>
      <h2>{title}</h2>
      <Content>
        {cards}
      </Content>
    </Container>
  )
}