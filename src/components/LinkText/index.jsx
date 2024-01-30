import { Container } from "./styles";

export function LinkText({ icon, name, ...rest }) {
  return (
    <Container {...rest}>
      {icon && icon}
      {name}
    </Container>
  )
}