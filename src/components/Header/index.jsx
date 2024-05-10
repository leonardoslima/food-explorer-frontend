import { List, MagnifyingGlass, Receipt, SignOut } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useAuth } from '../../hooks/auth';

import { Container } from "./styles";

import { Button } from '../Button'
import { Input } from '../Input'


export function Header({ search, onOpenMenu }) {
  const { signOut, user } = useAuth();

  const isAdmin = user?.isAdmin || false;

  return (
    <Container isAdmin={isAdmin}>
      <div>
        <button id="button-menu" onClick={onOpenMenu}>
          <List size={28} />
        </button>

        <Link to="/">
          <h1>
            <svg width="39" height="44" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" fill="#065E7C" />
            </svg>
            food explorer
            {isAdmin && <span>admin</span>}
          </h1>
        </Link>

        <div id="search">
          <MagnifyingGlass size={28} />
          <Input
            type="search"
            placeholder="Busque por pratos ou ingredientes"
            onChange={e => { search(e.target.value) }}
          />
        </div>

        <Link
          to={isAdmin ? '/newDish' : ''}
          id="order-button"
        >
          <Button
            title={isAdmin ? 'Novo prato' : `Pedidos (${0})`}
            icon={isAdmin ? '' : <Receipt size={32} />}
          />
        </Link>

        <div id="logout">
          <button onClick={signOut}>
            <SignOut size={22} />
          </button>
        </div>

        {!isAdmin && (
          <button>
            <Receipt size={26} />
            <span>0</span>
          </button>
        )}
      </div>
    </Container>
  )
}