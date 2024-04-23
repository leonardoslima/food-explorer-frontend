import { Plus, X } from '@phosphor-icons/react';

import { Container } from './styles';

export function AddIngredients({ isNew = false, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input
        type="text"
        readOnly={!isNew}
        placeholder="Adicionar"
        {...rest}
      />
      <button
        type="button"
        onClick={onClick}
      >
        {isNew ? <Plus /> : <X />}
      </button>
    </Container>
  );
}