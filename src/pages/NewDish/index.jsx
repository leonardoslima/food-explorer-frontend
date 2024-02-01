import { useState } from 'react';

import { BackButton, Container, Form, Textarea } from './styles';
import { CaretLeft, UploadSimple } from '@phosphor-icons/react';

import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { LinkText } from '../../components/LinkText';
import { MenuMobile } from '../../components/MenuMobile';
import { AddIngredients } from '../../components/AddIngredients';
import { Button } from '../../components/Button';

export function NewDish({ isAdmin = false }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Container>
      <MenuMobile
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Header onOpenMenu={() => setMenuIsOpen(true)} />

      <BackButton>
        <LinkText name="voltar" icon={<CaretLeft size={32} />} />
      </BackButton>

      <main>
        <Form>
          <h1>Novo prato</h1>

          <div className="threeColumns">
            <div className="input-wrapper">
              <label htmlFor="image">Imagem do prato</label>
              <div>
                <span>
                  <UploadSimple /> Selecione a imagem
                </span>
                <Input
                  id="image"
                  accept="image/png, image/jpeg"
                  type="file"
                />
              </div>
            </div>

            <Input id="name" label="Nome" placeholder="Salada Ceasar" />

            <div>
              <label htmlFor="category">Categoria</label>
              <select id="category">
                <option value="Refeição">Refeição</option>
                <option value="Pratos principais">Pratos principais</option>
                <option value="Entrada">Entrada</option>
              </select>
            </div>
          </div>

          <div className="twoColumns">
            <div>
              <label htmlFor="add">Ingredientes</label>
              <div>
                <AddIngredients value="Pão Naan" size="6" />
                <AddIngredients value="Feijão" size="4" />
                <AddIngredients id="add" isNew size="6" />
              </div>
            </div>

            <Input
              id="price"
              type="number"
              name="Preço"
              placeholder="R$ 00,00"
              min="0"
            />
          </div>

          <div id="textarea">
            <label htmlFor="description">Descrição</label>
            <Textarea
              id="description"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            />
          </div>

          <Button type="button" id="buttonAdd" title="Salvar alterações" />

        </Form>
      </main>

      <Footer />
    </Container>
  );
}