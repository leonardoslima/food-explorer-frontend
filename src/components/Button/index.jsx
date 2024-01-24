import { Container } from "./styles";

export function Button({ icon, title, ...rest }) {
  return (
    <Container {...rest}>
      {icon && icon}
      {title}
    </Container>
  );
}
