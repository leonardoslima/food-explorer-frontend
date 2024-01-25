import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <div className="logo">
        <div>
          <svg width="39" height="44" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" fill="#4D585E" />
          </svg>
          food explorer
        </div>
        <p><span>© 2023 -</span> Todos os direitos reservados.</p>
      </div>

    </Container>
  );
}