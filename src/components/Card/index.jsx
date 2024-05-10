import { Heart, PencilSimple } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import { Counter } from '../Counter';
import { Button } from '../Button';
import { api } from '../../services/api';

export function Card({ dish, isAdmin = false, favorite = false }) {
  return (
    <Container>
      {isAdmin ? (
        <button>
          <Link to={"/dishEdit/1"} >
            <PencilSimple size={32} />
          </Link>
        </button>
      ) : (
        <button>
          <Heart className={favorite ? 'fav' : ''} />
        </button>
      )}

      <Link to={"/dish/1"} >
        <img src={`${api.defaults.baseURL}/files/${dish.photo}`} alt={dish.name} />
        <h3>{dish.name} &gt;</h3>
        <p>{dish.description}</p>
        <span>R$ {dish.price}</span>
      </Link>

      {!isAdmin && (
        <div>
          <Counter quantity={2} />
          <Button title="incluir" />
        </div>
      )}
    </Container>
  );
}