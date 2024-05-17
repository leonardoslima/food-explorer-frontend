import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, PencilSimple } from '@phosphor-icons/react';

import { Container } from './styles';

import { Button } from '../Button';
import { Counter } from '../Counter';
import { api } from '../../services/api';

export function Card({ dish, isAdmin = false, favorite = false }) {
  const [quantity, setQuantity] = useState(1);

  function handleIncreaseAmountDish() {
    setQuantity(prevQuantity => prevQuantity + 1);
  }

  function handleDecreaseAmountDish() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      alert('A quantidade não pode ser menor que 1');
    }
  }

  return (
    <Container>
      {isAdmin ? (
        <button>
          <Link to={`/dishEdit/${dish.id}`} >
            <PencilSimple size={32} />
          </Link>
        </button>
      ) : (
        <button>
          <Heart className={favorite ? 'fav' : ''} />
        </button>
      )}

      <Link to={`/dish/${dish.id}`} >
        <img src={`${api.defaults.baseURL}/files/${dish.photo}`} alt={dish.name} />
        <h3>{dish.name} &gt;</h3>
        <p>{dish.description}</p>
        <span>R$ {dish.price}</span>
      </Link>

      {!isAdmin && (
        <div>
          <Counter
            quantity={quantity}
            handleIncreaseAmountDish={handleIncreaseAmountDish}
            handleDecreaseAmountDish={handleDecreaseAmountDish}
          />
          <Button title="incluir" />
        </div>
      )}
    </Container>
  );
}