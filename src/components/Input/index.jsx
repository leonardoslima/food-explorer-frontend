import { Container } from "./styles";

export function Input({ name, ...rest }) {
  return (
    <Container>
      <label htmlFor={name}>{name}</label>
      <input id={name} {...rest} />
    </Container>
  );
}