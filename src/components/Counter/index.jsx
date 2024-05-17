import { Minus, Plus } from '@phosphor-icons/react';
import { Container } from './styles';

export function Counter({ quantity, handleIncreaseAmountDish, handleDecreaseAmountDish }) {
  quantity = String(quantity).padStart(2, '0');

  return (
    <Container>
      <button
        onClick={handleDecreaseAmountDish}
      >
        <Minus size={24} />
      </button>
      {quantity}

      <button
        onClick={handleIncreaseAmountDish}
      >
        <Plus size={24} />
      </button>
    </Container>
  );
}