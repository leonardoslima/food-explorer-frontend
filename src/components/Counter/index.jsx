import { Minus, Plus } from '@phosphor-icons/react';
import { Container } from './styles';

export function Counter({ quantity }) {
  quantity = String(quantity).padStart(2, '0');

  return (
    <Container>
      <button>
        <Minus size={24} />
      </button>
      {quantity}

      <button>
        <Plus size={24} />
      </button>
    </Container>
  );
}