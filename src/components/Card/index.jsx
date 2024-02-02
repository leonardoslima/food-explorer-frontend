import { Heart, PencilSimple } from '@phosphor-icons/react';

import { Container } from './styles';

import { Counter } from '../Counter';
import { Button } from '../Button';

export function Card({ dish, isAdmin = false, favorite = false }) {
  return (
    <Container>
      {isAdmin ? (
        <button>
          <PencilSimple size={32} />
        </button>
      ) : (
        <button>
          <Heart className={favorite ? 'fav' : ''} />
        </button>
      )}
      <img src={dish.image} alt={dish.name} />
      <h3>{dish.name} &gt;</h3>
      <p>{dish.description}</p>
      <span>R$ {dish.price}</span>
      {!isAdmin && (
        <div>
          <Counter quantity={2}/>
          <Button title="incluir" />
        </div>
      )}
    </Container>
  );
}