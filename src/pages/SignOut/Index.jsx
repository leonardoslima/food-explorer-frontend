import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { LinkText } from "../../components/LinkText"
import { Container, Form } from "./styles"

export function SignOut() {
  return (
    <Container>
      <h1>
        <svg width="39" height="44" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" fill="#065E7C" />
        </svg>
        food explorer
      </h1>
      <Form>
        <Input
          name={"Seu nome"}
          placeholder="Exemplo: Maria da Silva"
        />
        <Input
          name={"Email"}
          placeholder="Exemplo: exemplo@exemplo.com.br"
        />
        <Input
          name={"Senha"}
          placeholder="No mínimo 6 caracteres"
        />

        <Button title={"Criar conta"} />
        <LinkText name={"Já tenho uma conta"} />
      </Form>
    </Container>
  )
}