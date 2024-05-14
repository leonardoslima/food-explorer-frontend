import { useState } from 'react';

import { BackButton, Container, Form, Textarea } from './styles';
import { CaretLeft, UploadSimple } from '@phosphor-icons/react';

import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { LinkText } from '../../components/LinkText';
import { MenuMobile } from '../../components/MenuMobile';
import { AddIngredients } from '../../components/AddIngredients';

import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

export function NewDish() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])

    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewDish() {
    if (!image) {
      return alert("Erro: Você não inseriu uma imagem para o prato!");
    }

    if (tags.length < 1) {
      return alert("Erro: Adicione pelo menos um ingrediente!")
    }

    if (newTag) {
      return alert("Erro: Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.")
    }

    if (!price) {
      return alert("Erro: Você não informou o preço do prato!");
    }

    if (!description) {
      return alert("Erro: Você não informou uma descrição para o prato!");
    }

    setLoading(true);

    try {
      const response = await api.post("/dishes", {
        name,
        category,
        ingredients: tags,
        price,
        description
      });

      const dishId = String(response.data.id);

      const fileUploadForm = new FormData();
      fileUploadForm.append("photo", image)

      await api.patch(`/dishes/photo/${dishId}`, fileUploadForm);

      alert("Prato criado com sucesso!");

      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
        setLoading(false);
      } else {
        alert("Erro ao criar o prato!");
        setLoading(false);
      }
    }
  }

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
                  onChange={e => setImage(e.target.files[0])}
                />
              </div>
            </div>

            <Input
              id="name"
              name="Nome"
              placeholder="Ex.: Salada Ceasar"
              onChange={e => setName(e.target.value)}
            />

            <div>
              <label htmlFor="category">Categoria</label>
              <select
                id="category"
                defaultValue={'default'}
                onChange={e => setCategory(e.target.value)}
              >
                <option value="default" disabled>Selecione a categoria</option>
                <option value="Refeição">Refeição</option>
                <option value="Pratos principais">Pratos principais</option>
                <option value="Entrada">Entrada</option>
              </select>
            </div>
          </div>

          <div className="twoColumns">
            <div>
              <label>Ingredientes</label>
              <div>
                {
                  tags.map((tag, index) => (
                    <AddIngredients
                      key={String(index)}
                      value={tag}
                      onClick={() => handleRemoveTag(tag)}
                    />
                  ))
                }

                <AddIngredients
                  isNew
                  onChange={e => setNewTag(e.target.value)}
                  value={newTag}
                  onClick={handleAddTag}
                />
              </div>
            </div>

            <Input
              id="price"
              type="number"
              name="Preço"
              placeholder="R$ 00,00"
              min="0"
              onChange={e => setPrice(e.target.value)}
            />
          </div>

          <div id="textarea">
            <label htmlFor="description">Descrição</label>
            <Textarea
              id="description"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={e => setDescription(e.target.value)}
            />
          </div>

          <Button
            type="button"
            title={loading ? "Salvando alterações..." : "Salvar alterações"}
            onClick={handleNewDish}
            disabled={loading}
          />

        </Form>
      </main>

      <Footer />
    </Container>
  );
}