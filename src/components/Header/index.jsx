import { List, MagnifyingGlass, Receipt, SignOut } from "@phosphor-icons/react";
import { Container } from "./styles";

import { Button } from '../Button'
import { Input } from '../Input'


export function Header({ $isAdmin = false }) {
  return (
    <Container isAdmin={$isAdmin}>
      <div>
        <button>
          <List size={28} />
        </button>

        <h1>
          <svg width="39" height="44" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" fill="#065E7C" />
          </svg>
          food explorer
          {$isAdmin && <span>admin</span>}
        </h1>

        <div id="search">
          <MagnifyingGlass size={28} />
          <Input
            type="search"
            placeholder="Busque por pratos ou ingredientes"
          />
        </div>

        <Button
          id="order-button"
          title={$isAdmin ? 'Novo prato' : `Pedidos (${0})`}
          icon={$isAdmin ? '' : <Receipt size={32} />}
        />

        <div id="logout">
          <SignOut size={22} />
        </div>

        {!$isAdmin && (
          <button>
            <Receipt size={32} />
            <span>0</span>
          </button>
        )}
      </div>
    </Container>
  )
}