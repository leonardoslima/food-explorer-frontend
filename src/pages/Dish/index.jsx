import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { CaretLeft } from '@phosphor-icons/react';
import { BackButton, Container, Content } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { Counter } from '../../components/Counter';
import { LinkText } from '../../components/LinkText';
import { MenuMobile } from '../../components/MenuMobile';
import { Ingredient } from '../../components/Ingredient';

export function Dish() {
  const params = useParams();

  const { user } = useAuth();

  const isAdmin = user?.isAdmin || false;

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [data, setData] = useState(null);

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

  useEffect(() => {
    async function fetchDishId() {
      try {
        const response = await api.get(`/dishes/${params.id}`);

        setData(response.data);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Erro ao obter dados.");
        }
      }
    }

    fetchDishId();
  }, []);

  return (
    <Container>
      <MenuMobile
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Header onOpenMenu={() => setMenuIsOpen(true)} />

      <BackButton>
        <LinkText name="voltar" icon={<CaretLeft size={32} />} to={-1} />
      </BackButton>

      {
        data &&
        <main>
          <Content>
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet={`${api.defaults.baseURL}/files/${data.photo}`}
                type="image/png"
              />
              <img src={`${api.defaults.baseURL}/files/${data.photo}`} alt={data.name} />
            </picture>

            <div>
              <h2>{data.name}</h2>
              <p>
                {data.description}
              </p>

              <ul>
                {
                  data.ingredients &&

                  data.ingredients.map(ingredients => (
                    <Ingredient
                      key={ingredients.id}
                      name={ingredients.name}
                    />
                  ))
                }

              </ul>

              <div>
                {
                  !isAdmin &&
                  <Counter
                    quantity={quantity}
                    handleIncreaseAmountDish={handleIncreaseAmountDish}
                    handleDecreaseAmountDish={handleDecreaseAmountDish}
                  />
                }
                <Link to={isAdmin ? `/dishEdit/${params.id}` : ''}>
                  <Button
                    title={isAdmin ? 'Editar prato' : `Incluir ∙ R$ ${data.price}`}
                  />
                </Link>
              </div>
            </div>
          </Content>
        </main>
      }
      <Footer />
    </Container>
  );
}